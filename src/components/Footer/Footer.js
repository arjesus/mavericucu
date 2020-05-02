import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';

const Footer = props => {
  return (
    <React.Fragment>
      <footer className="footer">
        <ul>
          <Link to="/privacy" className="footer-link">
            Privacidad
          </Link>
          <Link to="/cookies" className="footer-link">
            Cookies
          </Link>
          <Link to="/terms" className="footer-link">
            Términos
          </Link>
        </ul>
      </footer>
      {/* --- STYLES --- */}
      <style jsx>{`
        @media (max-width: 600px) {
          .footer {
            align-items: flex-start !important;
          }
        }
        .footer {
          align-items: center;
          display: flex;
          flex-direction: 'column';
          background: ${theme.color.principals.darkerPurpleText};
          padding: ${theme.space.inset.default};
          top: 0;
          width: 100%;
          min-height: 15vh;
          height: auto;
          justify-content: center;

          & :global(a.footer-link) {
            color: ${theme.color.principals.white};
            margin: 0 20px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
