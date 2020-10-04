import { Link } from 'gatsby';
import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';
import logo from '../../../static/images/logo.png';
import { makeStyles } from '@material-ui/core';
import config from '../../../content/meta/config';

const useStyles = makeStyles({
  asd: {
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
});

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
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.asd}>
        <Box>
          <Grid container direction="column">
            <Grid container direction="row">
              <Grid item sm={12} md={3}>
                <Grid item md={12}>
                  <img className={classes.logo} src={logo} alt={config.siteTitle} />
                </Grid>
                <Grid item md={12}>
                  <p className={classes.footerLink}>Making something big¡¡</p>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                {evaMinerva.map((eva, index) => {
                  return (
                    <Grid key={index} item md={12}>
                      <a
                        className={index === 0 ? classes.footerLinkTitle : classes.footerLink}
                        href={eva.url}
                      >
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
                      <a
                        className={index === 0 ? classes.footerLinkTitle : classes.footerLink}
                        href={blog.url}
                      >
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
                        className={index === 0 ? classes.footerLinkTitle : classes.footerLink}
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
              {legals.map((legal, index) => {
                return (
                  <Grid key={index} item md={2}>
                    <a className={classes.footerLink} href={legal.url}>
                      {legal.name}
                    </a>
                  </Grid>
                );
              })}
              <Grid item md={6}></Grid>
            </Grid>
          </Grid>
        </Box>
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
          .logo {
            img {
              width: 50%;
            }
          }

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
