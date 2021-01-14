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
            {Icon && <Icon />} {label}
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

        .contact-button {
          border: 0 solid;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
          box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
            0 6px 14px 0 #4e3b80;
          border-radius: 0.5rem;
          outline-offset: 0px;
          text-shadow: none;
          margin: 0 20px;
          padding: 0px 20px;
          transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
          width: 150px;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          display: flex;
        }

        .contact-button:hover {
          border: 1px solid;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
          outline-color: rgba(255, 255, 255, 0);
          outline-offset: 15px;
          text-shadow: 1px 1px 2px #427388;
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
              background: color(white alpha(-60%));
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
