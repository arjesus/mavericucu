import { Link } from 'gatsby';
import React from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';

const Footer = props => {
  const post = props.data;
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
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default Footer;

export const query = graphql`
  query IndexQuery3 {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;