import { Link } from 'gatsby';
import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';
import logo from '../../../static/images/white-logo-text.png';
import Eulogo from '../../../static/images/logo_startup_awards.png';
import googleStart from '../../../static/images/Google_for_Startups_logo.png';
import cloudFor from '../../../static/images/cloudforstartup.png';
import diversity from '../../../static/images/diversity.png';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
    name: 'Especialidades',
    url: '/%20specialties'
  },
  {
    name: 'Depresión',
    url: '/depresion'
  },
  {
    name: 'Autoestima',
    url: '/autoestima'
  },
  {
    name: 'Ansiedad',
    url: '/ansiedad'
  },
  {
    name: 'Terapia de pareja',
    url: '/terapia-de-pareja'
  },
  {
    name: 'Sexualidad',
    url: '/sexualidad'
  },
  {
    name: 'Fobia',
    url: '/fobias'
  },
  {
    name: 'Coaching deportivo',
    url: '/coaching-deportivo'
  },
  {
    name: 'Coaching',
    url: '/coaching'
  }
];

const blogs = [
  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Tecnica de relación',
    url: '/blog/tecnica-relajacion/'
  },
  {
    name: 'Teletrabajo e impacto psicológico',
    url: '/blog/teletrabajo'
  },
  {
    name: 'Fin del aislamiento y ansiedad',
    url: '/blog/fin-aislamiento-ansiedad'
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
  /* const classes = useStyles(); */

  const data = useStaticQuery(graphql`
    {
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
  `);

  const post = JSON.stringify(data, null, 4);

  return (
    <React.Fragment>
      <footer className="footer">
        <Box className="footer-box">
          <Grid container direction="column">
            <Grid container direction="row">
              <Grid item sm={12} md={3} className="footer-icon-column">
                <Grid item md={12}>
                  <img
                    className="logo"
                    src={logo}
                    height="178.552"
                    width="260"
                    alt={config.siteTitle}
                  />
                </Grid>
                <Grid item md={12} className="social-media-container">
                  <a href="https://www.facebook.com/Eva-Minerva-109002587988694">
                    <FacebookIcon style={{ fontSize: '3rem', color: 'white' }} />
                  </a>
                  <a href="https://www.instagram.com/eva.minerva.psicologia/">
                    <InstagramIcon style={{ fontSize: '3rem', color: 'white' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/eva-minerva-616a78205/">
                    <LinkedInIcon style={{ fontSize: '3rem', color: 'white' }} />
                  </a>
                </Grid>
                <Grid item md={12}>
                  <div className="logo-container">
                    <img
                      className="logo"
                      src={Eulogo}
                      alt={config.siteTitle}
                      height="56"
                      width="260"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="logo-container">
                    <img
                      className="logo"
                      src={googleStart}
                      alt={config.siteTitle}
                      height="56"
                      width="260"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="logo-container">
                    <img
                      className="logo"
                      src={cloudFor}
                      alt={config.siteTitle}
                      height="56"
                      width="260"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="logo-container">
                    <img
                      className="logo"
                      src={diversity}
                      alt={config.siteTitle}
                      height="56"
                      width="260"
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item sm={12} md={3}>
                {evaMinerva.map((eva, index) => {
                  return (
                    <Grid key={index} item md={12} className="links-container">
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
                    <Grid key={index} item md={12} className="links-container">
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
                    <Grid key={index} item md={12} className="links-container">
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
            <Grid container direction="column">
              <Grid item className="footer-text">
                <p>
                  Si te encuentras en una situación de emergencia debes ponerte en contacto con las
                  líneas de emergencia, 061 (asesoramiento médico y emergencias) o 112 (solo
                  emergencias) en España.
                </p>
              </Grid>
              <hr />
              <Grid container direction="row">
                {/* <Grid item sm={12} md={6}></Grid> */}
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
          </Grid>
        </Box>
      </footer>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
  // data: PropTypes.object.isRequired
};

export default Footer;

/* 
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
 */
