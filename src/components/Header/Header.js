import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { getScreenWidth, isPortrait } from '../../utils/helpers';

import { ScreenWidthContext, FontLoadedContext } from '../../layouts';
import config from '../../../content/meta/config';
import Menu from '../Menu';

import logo from '../../../static/images/logo-top.png';
import smallLogo from '../../../static/images/logo.png';
import SecondMenu from '../Menu/SecondMenu';

class Header extends React.Component {
  state = {
    fixed: false,
    screenWidth: 0
  };

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth(),
      portrait: isPortrait()
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeThrottler, false);
    }
  }

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? 'fixed' : '';
    const homepage = this.props.path === '/' ? 'homepage' : '';

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { screenWidth, portrait } = this.state;

    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <img
              className={screenWidth < 760 ? 'logoSmall' : 'logo'}
              src={screenWidth < 760 ? smallLogo : logo}
              alt={config.siteTitle}
            />
          </Link>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => <SecondMenu path={path} theme={theme} screenWidth={width} />}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            align-items: center;
            justify-content: center;
            background-color: ${theme.color.neutral.white};
            display: flex;
            height: 70px;
            position: relative;
            top: 0;
            width: 100%;
            align-items: center;

            :global(a.logoType) {
              align-items: center;
              display: flex;
              flex-direction: 'column';
              color: ${theme.color.principals.darkerPurpleText};

              .logo {
                flex-shrink: 0;
              }
            }

            &.homepage {
              background-color: ${theme.color.neutral.white};
              height: ${theme.header.height.homepage};
              z-index: 1;
            }
          }

          h1 {
            font-size: ${theme.font.size.m};
            font-weight: ${theme.font.weight.standard};
            margin: ${theme.space.stack.xs};
          }

          h2 {
            font-weight: ${theme.font.weight.standard};
            font-size: ${theme.font.size.xxs};
            letter-spacing: 0;
            margin: 0;
          }

          .logo {
            width: 350px;
          }

          .logoSmall {
            width: 100px;
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === '/' ? theme.header.height.homepage : theme.header.height.default};
          }

          @from-width tablet {
            .header {
              padding: 5px;

              &.homepage {
                height: 70px;
              }
            }
          }

          @below desktop {
            .header {
              justify-content: space-between;
            }
            .header.homepage {
              .logo {
                border: none;
              }

              :global(a.logoType),
              h1 {
                color: ${theme.color.principals.darkerPurpleText};
              }
              h2 {
                color: ${theme.color.principals.darkerPurpleText};
              }
            }
          }

          @from-width desktop {
            .header {
              align-items: center;
              background-color: ${theme.color.neutral.white};
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 0.5s;
              z-index: 1;

              &.fixed {
                height: ${theme.header.height.fixed};
                background-color: ${theme.color.neutral.white};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
                box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
                  0 0px 9px 0 #4e3b80;

                h1 {
                  margin: ${theme.space.stack.xxs};
                }

                h2 {
                  display: none;
                }

                img {
                  width: 60px;
                }

                .logo {
                  width: 250px;
                  height: auto;
                }
              }

              &.homepage:not(.fixed) {
                :global(a.logoType),
                h1 {
                  color: ${theme.color.principals.darkerPurpleText};
                }
                h2 {
                  color: ${theme.color.principals.lightPurple};
                }
              }
            }

            .header :global(a.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }

            .logo {
              margin: ${theme.space.inline.default};

              .fixed & {
                height: 70px;
                width: 50px;
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            h2 {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }

            @keyframes h2Entry {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
