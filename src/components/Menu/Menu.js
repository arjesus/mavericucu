import React from 'react';
import PropTypes from 'prop-types';
require('core-js/fn/array/from');

import { FaHome } from 'react-icons/fa/';
import { FaSearch } from 'react-icons/fa/';
import { FaEnvelope } from 'react-icons/fa/';
import { FaTag } from 'react-icons/fa/';

import Item from './Item';
import Expand from './Expand';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.itemList = React.createRef();

    const pages = props.pages.map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }));

    this.items = [
      { to: '/', label: 'Home', icon: FaHome },
      // { to: "/category/", label: "Blog", icon: FaTag },
      { to: '/plans/', label: 'Planes', icon: FaTag },
      // { to: "/search/", label: "Search", icon: FaSearch },
      // ...pages,
      { to: '/%20specialties/', label: 'Especialidades', icon: FaSearch },
      // { to: '/professional/', label: 'Trabaja Con nosotros', icon: FaSearch },
      { to: '/contact/', label: 'Contact', icon: FaEnvelope }
    ];

    this.renderedItems = []; // will contain references to rendered DOM elements of menu
  }

  state = {
    open: false,
    hiddenItems: []
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    fixed: PropTypes.bool.isRequired,
    screenWidth: PropTypes.number.isRequired,
    fontLoaded: PropTypes.bool.isRequired,
    pages: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.renderedItems = this.getRenderedItems();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.path !== prevProps.path ||
      this.props.fixed !== prevProps.fixed ||
      this.props.screenWidth !== prevProps.screenWidth ||
      this.props.fontLoaded !== prevProps.fontLoaded
    ) {
      if (this.props.path !== prevProps.path) {
        this.closeMenu();
      }
    }
  }

  getRenderedItems = () => {
    const itemList = this.itemList.current;
    return Array.from(itemList.children);
  };

  render() {
    const { screenWidth, theme } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <nav className={`menu ${open ? 'open' : ''}`} rel="js-menu">
          <ul className="itemList" ref={this.itemList}>
            {this.items.map(item => {
              if (item.to !== this.props.path) {
                return <Item item={item} key={item.label} icon={item.icon} theme={theme} />;
              } else {
                return <div></div>;
              }
            })}
          </ul>
          {this.state.hiddenItems.length > 0 && <Expand onClick={this.toggleMenu} theme={theme} />}
          {open && screenWidth >= 1024 && (
            <ul className="hiddenItemList" ref={this.itemList}>
              {this.state.hiddenItems.map(item => (
                <Item item={item} key={item.label} hiddenItem theme={theme} />
              ))}
            </ul>
          )}
        </nav>

        {/* --- STYLES --- */}
        <style jsx>{`
          .menu {
            align-items: center;
            background: ${theme.color.neutral.white};
            bottom: 0;
            display: flex;
            flex-grow: 1;
            left: 0;
            max-height: ${open ? '1000px' : '50px'};
            padding: 0 ${theme.space.inset.s};
            position: fixed;
            width: 100%;
            z-index: 1;
            transition: all ${theme.time.duration.default};
          }

          .itemList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0; /* 0 ${theme.space.s}; */
            position: relative;
            width: 100%;
          }

          @from-width desktop {
            .menu {
              border-top: none;
              background: transparent;
              display: flex;
              position: relative;
              justify-content: flex-end;
              padding-left: 50px;
              transition: none;
            }

            .itemList {
              justify-content: flex-end;
              padding: 0;
            }

            .hiddenItemList {
              list-style: none;
              margin: 0;
              position: absolute;
              background: ${theme.background.color.primary};
              border: 1px solid ${theme.line.color};
              top: 48px;
              right: ${theme.space.s};
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              padding: ${theme.space.m};
              border-radius: ${theme.size.radius.small};
              border-top-right-radius: 0;


              &:after {
                content: "";
                background: ${theme.background.color.primary};
                z-index: 10;
                top: -10px;
                right: -1px;
                width: 44px;
                height: 10px;
                position: absolute;
                border-left: 1px solid ${theme.line.color};
                border-right: 1px solid ${theme.line.color};
              }

              :global(.homepage):not(.fixed) & {
                border: 1px solid transparent;
                background: color(white alpha(-10%));
                top: 50px;

                &:after {
                  top: -11px;
                  border-left: 1px solid transparent;
                  border-right: 1px solid transparent;
                  background: color(white alpha(-10%));
                }
              }

              :global(.fixed) & {
                top: 44px;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Menu;
