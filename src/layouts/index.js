import './typography.css';
import 'typeface-open-sans';
import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { getScreenWidth, timeoutThrottlerHandler } from '../utils/helpers';
import Footer from '../components/Footer/';
import Header from '../components/Header';
import CookiesBlock from '../components/cookiesComponent/cookies.component';
import Whatsapp from '../components/whatsapp/whatsapp';

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from '../theme/theme.yaml';
import fondo from '../images/svg-icons/webackground1.svg';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    if (typeof window !== `undefined`) {
      this.loadFont('Lato', 100);
      this.loadFont('Lato', 400);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeThrottler, false);
    }
    if (localStorage.getItem('Cookies') && !localStorage.getItem('id')) {
      localStorage.setItem('id', Math.floor(100000 + Math.random() * 900000));
    }
    if (window.location.search) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const gclid = urlParams.get('gclid');
      localStorage.setItem('gclid', gclid);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, 'resize', 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === '/') {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            pages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
              sort: { fields: [fields___prefix], order: ASC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            footnote: { html: footnoteHTML },
            pages: { edges: pages }
          } = data;

          return (
            <ThemeContext.Provider value={this.state.theme}>
              <FontLoadedContext.Provider value={this.state.font400loaded}>
                <ScreenWidthContext.Provider value={this.state.screenWidth}>
                  <React.Fragment>
                    <Header
                      path={this.props.location.pathname}
                      pages={pages}
                      theme={this.state.theme}
                    />
                    <main className="background-img">
                      <div>{children}</div>
                      <Whatsapp />
                      {typeof window !== 'undefined' &&
                        localStorage.getItem('Cookies') !== 'true' && <CookiesBlock />}
                    </main>
                    <Footer data={data} html={footnoteHTML} theme={this.state.theme} />

                    {/* --- STYLES --- */}
                    <style jsx>{`
                      main {
                        min-height: 80vh;
                        overflow-x: hidden;
                      }
                    `}</style>
                    <style jsx global>{`
                      html {
                        font-family: 'Montserrat';
                        box-sizing: border-box;
                        font-weight: 400;
                        max-width: 1920px;
                        margin: 0 auto;
                      }
                      *,
                      *:after,
                      *:before {
                        box-sizing: inherit;
                        margin: 0;
                        padding: 0;
                      }
                      body {

                      }
                      @media screen and (orientation:landscape) {                         
                        html {
                          width: fit-content;
                        }
                      }
                      h1,
                      h2,
                      h3 {
                        line-height: 1.1;
                        letter-spacing: -0.03em;
                        margin: 0;
                        font-weight: 400;
                      }
                      h1 {
                        letter-spacing: -0.04em;
                      }
                      p {
                        font-weight: 300;
                        margin: 0;
                        font-size: 1.3rem;
                        line-height: 1.5;
                      }
                      strong {
                        font-weight: ${this.state.font600loaded ? 600 : 400};
                      }
                      a {
                        text-decoration: none;
                        color: #666;
                        line-height: 1.5;
                      }
                      .background-img {
                        padding: 10px 10px;
                        background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
                        url('${fondo}') no-repeat center center;
                      -webkit-background-size: cover;
                      -moz-background-size: cover;
                      -o-background-size: cover;
                      background-size: cover;
                      }
                      main {
                        width: auto;
                        display: block;
                      }
                    `}</style>
                  </React.Fragment>
                </ScreenWidthContext.Provider>
              </FontLoadedContext.Provider>
            </ThemeContext.Provider>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
