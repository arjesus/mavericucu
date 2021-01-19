import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Item = props => {
  const { theme, item: { label, to, icon: Icon } = {}, onClick } = props;
  return (
    <React.Fragment>
      <li className={'hiddenItem' in props ? 'hiddenItem' : 'item'} key={label}>
        <div className={label.includes('Comenzar') && 'contact-button'}>
          <Link
            to={to}
            className={'hiddenItem' in props ? 'inHiddenItem' : ''}
            onClick={onClick}
            data-slug={to}
          >
            {label}
          </Link>
        </div>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .item,
        .showItem {
          background: transparent;
          transition: all ${theme.time.duration.default};
          display: flex;
          align-items: center;
          margin: 0 10px;
          width: max-content;

          :global(a) {
            padding: ${theme.space.inset.s};
            display: flex;
            align-items: center;
          }

          :global(svg) {
            margin: 0 ${theme.space.inset.xs} 0 0;
            opacity: 0.3;
          }
        }

        :global(.itemList .hideItem) {
          display: none;
        }

        @from-width desktop {
          .item {
            :global(a) {
              color: ${theme.color.principals.darkerPurpleText};
              padding: 5px;
              transition: all ${theme.time.duration.default};
              border-radius: ${theme.size.radius.small};
            }

            :global(.homepage):not(.fixed) & :global(a) {
              color: ${theme.color.principals.darkerPurpleText};
            }

            :global(a:hover) {
              color: ${theme.color.principals.darkerPurpleText};
              font-weight: 700;
            }

            :global(svg) {
              transition: all ${theme.time.duration.default};
            }

            &:hover :global(svg) {
              fill: ${theme.color.principals.darkerPurpleText};
              opacity: 1;

              :global(.hero) & :global(svg) {
                fill: green;
              }
            }
          }

          .contact-button {
            background-color: ${theme.color.principals.darkPurple};
            width: 150px;
            padding: 7px 25px;
            color: #fff;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            :global(.homepage):not(.fixed) & :global(a) {
              color: ${theme.color.principals.white};
            }
            :global(a) {
              color: ${theme.color.principals.white};
            }
            :global(a:hover) {
              color: ${theme.color.principals.white};
              font-weight: 700;
            }
          }

          .showItem {
            display: none;
          }

          .hiddenItem {
            text-align: left;
            padding: ${theme.space.xs};

            & :global(a.inHiddenItem) {
              color: ${theme.color.principals.darkerPurpleText};
              &:hover {
                color: ${theme.color.principals.darkerPurpleText};
                font-weight: 700;
              }
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default Item;
