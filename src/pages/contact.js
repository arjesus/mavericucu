import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { ThemeContext } from '../layouts';
import womanWorried from '../../static/images/mujer.preocupada.jpg';
import Article from '../components/Article';
import DynamicForm from '../components/dynamic-form/dynamic-form';
import theme from '../theme/theme.yaml';
import Seo from '../components/Seo';

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      {/* <header>
        <section className="hero">
          <div>
            <h1>Formulario de contacto</h1>
            <p>
              Comentanos tus dudas y preguntas asi como cuales tus sentimientos y nos
              pondremos en contacto contigo lo antes posible.
                  </p>
          </div>
          <div>
            <img src={womanWorried} alt="Mujer preocupada" />
          </div>
        </section>
      </header> */}
      <DynamicForm />

      <Seo facebook={facebook} />
      {/* --- STYLES --- */}
      {/* <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 55vh;
          height: 100px;
          justify-content: center;
          align-items: center;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
          grid-auto-flow: column;
          background-color: #4e3b8026;
          grid-column-gap: 60px;
          img {
            width: 50%;
          }
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.color.principals.darkerPurpleText};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 'Open Sans';
        }

        p {
          font-size: 1rem;
          color: ${theme.color.principals.darkerPurpleText};
          text-align: center;
        }

        @media (max-width: 600px) {
          .hero {
            grid-template-columns: 1fr;
            grid-template-rows: 0.7fr 0fr 1fr;
            height: 100%;
            grid-gap: 30px;
            padding: 25px;
            margin-top: 80px;
            img {
              width: 100%;
            }
            .mobile-button {
              margin: 0 auto;
              padding: 11px 69px;
              background-color: ${theme.color.principals.darkerPurpleText};
              border: none;
              border-radius: 0.5em;
              color: ${theme.color.principals.white};
              font-size: 20px;
              cursor: pointer;
            }
          }
          h1 {
            font-size: 1.9rem;
            line-height: 1.3;
          }
          p {
            font-size: 1rem;
          }
          .padding-block {
            padding: 30px 25px !important;
            display: grid;
            grid-template-rows: 1.5fr 0.2fr 1fr;
          }
        }
      `}</style> */}
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
