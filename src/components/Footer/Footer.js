import { Link } from 'gatsby';
import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';
import logo from '../../../static/images/white-logo-text.svg';
import Eulogo from '../../../static/images/logo_startup_awards.png';
import { makeStyles } from '@material-ui/core';
import config from '../../../content/meta/config';
import './footer.css';

/* const useStyles = makeStyles({
  footer: {
    background: theme.color.principals.darkerPurpleText,
    padding: theme.space.inset.default,
    width: '100%',
    minHeight: '15vh',
    height: 'auto'
  },
  logo: {
    width: '200px'
  },
  footerLinkTitle: {
    fontWeight: '700',
    color: theme.color.principals.lightGray,
    fontSize: '1.2rem',
    margin: '20px 0'
  },
  footerLink: {
    color: theme.color.principals.lightGray,
    margin: '10px 0'
  }
}); */

const evaMinerva = [
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Trabaja con nosotros',
    url: '/professional/'
  },
  {
    name: 'Contactanos',
    url: '/contact/'
  },
  {
    name: 'Planes y precios',
    url: '/plans/'
  },
  {
    name: 'Especialidades',
    url: '/%20specialties/'
  },
  {
    name: 'Quienes somos',
    url: '/quienes-somos/'
  }
];

const specializacions = [
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  },
  {
    name: 'Eva Minerva',
    url: '/'
  }
];

const blogs = [
  {
    name: 'Blog',
    url: '/'
  },
  {
    name: 'Blog 2',
    url: '/'
  },
  {
    name: 'Blog 3',
    url: '/'
  },
  {
    name: 'Blog 4',
    url: '/'
  }
];

const legals = [
  {
    name: 'Privacidad',
    url: '/privacy'
  },
  {
    name: 'Terms',
    url: '/terms'
  },
  {
    name: 'cookies',
    url: '/cookies'
  }
];

const Footer = props => {
  const post = props.data;
  /* const classes = useStyles(); */

  return (
    <React.Fragment>
      <footer className="footer">
        <Box className="footer-box">
          <Grid container direction="column">
            <Grid container direction="row">
              <Grid item sm={12} md={3}>
                <Grid item md={12}>
                  <img className="logo" src={logo} alt={config.siteTitle} />
                </Grid>
                <Grid item md={12}>
                  <div className="logo-container">
                    <img className="logo" src={Eulogo} alt={config.siteTitle} />
                  </div>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                {evaMinerva.map((eva, index) => {
                  return (
                    <Grid key={index} item md={12}>
                      <a className={index === 0 ? 'footerLinkTitle' : 'footerLink'} href={eva.url}>
                        {eva.name}
                      </a>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item sm={12} md={3}>
                {blogs.map((blog, index) => {
                  return (
                    <Grid key={index} item md={12}>
                      <a className={index === 0 ? 'footerLinkTitle' : 'footerLink'} href={blog.url}>
                        {blog.name}
                      </a>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item sm={12} md={3}>
                {specializacions.map((specializacion, index) => {
                  return (
                    <Grid key={index} item md={12}>
                      <a
                        className={index === 0 ? 'footerLinkTitle' : 'footerLink'}
                        href={specializacion.url}
                      >
                        {specializacion.name}
                      </a>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <hr />
            <Grid container direction="row">
              <Grid item sm={12} md={6}></Grid>
              <div className="legals">
                {legals.map((legal, index) => {
                  return (
                    <Grid item sm={12} md={6} key={index} className="footerLink-box">
                      <a className="footerLink" href={legal.url}>
                        {legal.name}
                      </a>
                    </Grid>
                  );
                })}
              </div>
              {/*  <Grid item md={6}></Grid> */}
            </Grid>
          </Grid>
        </Box>
      </footer>
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
