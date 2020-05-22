import React from 'react';
import PropTypes from 'prop-types';
import womanWorried from '../../images/jpg/mujer-en-sofa.jpg';
import capturaDePantalla from '../../images/jpg/mujer-ordenador.jpg';

import paso1 from '../../../static/images/paso1.jpg';
import paso2 from '../../../static/images/paso2.jpg';
import paso3 from '../../../static/images/paso3.jpg';
import Evaluations from '../evaluations/evaluations.js';
import Psychology from '../psychology/psychology';
import Plans from './components/plans.component';

const Hero = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <div className="grid-container">
        <div className="header">
          <div className="top-header">
            <div className="top-header-text">
              <h1>Psicólogos online. Estabilidad emocional cuando más la necesites</h1>
              <p>
                Ayuda psicológica especial durante periodo de confinamiento con psicólogos
                especializados en el impacto emocional del coronavirus COVID-19.
              </p>
              <a href="#link-to-form-section">Contactanos</a>
            </div>
            {typeof window !== 'undefined' && window.innerWidth <= 600 && (
              <a href="#link-to-form-section" className="mobile-button">
                Reserva tu cita online
              </a>
            )}
            <img className="top-header-img" src={womanWorried} alt="Mujer preocupada" />
          </div>
          <div>
            {typeof window !== 'undefined' && window.innerWidth > 600 && (
              <section className="call-to-action">
                <h2>
                  Ayuda psicológica especial durante periodo de confinamiento con psicólogos
                  especializados en el impacto emocional del <strong>coronavirus COVID-19.</strong>
                </h2>
              </section>
            )}
          </div>
        </div>
        <div className="professionals">
          <Psychology />
        </div>
        <div className="close-contact">
          <div className="hero-sub-text">
            <h2>Atención especializada y de calidad</h2>
            <p>
              Nuestros especialistas guías te contactaran para de forma segura y privada para
              encontrar el psicólogo que más se adapte a tus necesidades.
            </p>
          </div>
          <div className="hero-sub-image">
            <img src={capturaDePantalla} alt="Mujer psicologa ayudando" />
            <a href="#link-to-form-section">Contactanos</a>
          </div>
        </div>
        <div className="reviews">
          <Evaluations />
        </div>
        <div className="differences">
          <h2>¿Por qué nos eligen con respecto a otras terapias?</h2>
          <div className="plans-sub">
            <Plans />
            <div className="plans-sub-text">
              <h3>Primera cita gratis</h3>
              <p>
                Podríamos comentar muchas más cosas sobre nuestros profesionales y los buenos
                resultados de la terapia online pero a la hora de la verdad lo que cuenta es{' '}
                <strong>tu experiencia</strong>
              </p>
              <a href="/contact" className="plans-botton">
                Contacta con nosotros
              </a>
            </div>
          </div>
        </div>
        <div className="steps">
          <div className="hero-sub-image">
            <img src={paso1} alt="Mujer psicologa ayudando" />
            <p>
              <strong>Contactanos.</strong> Mediante nuestro formulario web o llamada telefónica,
              nos pondremos en contacto contigo en la hora y momento que solicites.
            </p>
          </div>
          <div className="hero-sub-image">
            <img src={paso2} alt="Mujer psicologa ayudando" />
            <p>
              Habla con nuestro especialista guia. Nuestros especialistas te contactaran para de
              forma segura y privada encontrar el psicólogo que más se adapte a tus necesidades.
            </p>
          </div>
          <div className="hero-sub-image">
            <img src={paso3} alt="Mujer psicologa ayudando" />
            <p>
              Comienza tu terapia online. Conoce a tu psicólogo y empieza tu primera sesión
              gratuita.
            </p>
          </div>
        </div>
        <div className="contact"></div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.9fr 1fr 1fr 1fr 1fr 1fr 1fr;
          gap: 25px 1px;
          grid-template-areas:
            'header'
            'professionals'
            'close-contact'
            'reviews'
            'differences'
            'steps'
            'contact';
          padding: 65px 0 20px 0;
        }

        .header {
          background-color: white;
          border-radius: 1rem;
          grid-area: header;
          min-height: 70vh;
          height: auto;
          justify-content: center;
          align-items: center;
          grid-auto-flow: column;
          display: grid;
          grid-template-rows: 1fr 0.4fr;

          .call-to-action {
            grid-area: call-to-action;
            background-color: ${theme.color.principals.darkerPurpleText};
            color: white;
            height: 100px;
            text-align: center;
            padding: 15px 30px;
            border-radius: 0 0 1rem 1rem;

            h2 {
              font-size: 18px;
              line-height: 1.5;
            }
          }

          .top-header {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .top-header-text {
            display: flex;
            flex-direction: column;
            display: flex;
            padding: 25px;
            justify-content: space-evenly;
            height: 80%;
            align-self: center;

            h1 {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 32px;
            }

            p {
              font-size: 16px;
            }

            a {
              background-color: ${theme.color.principals.darkerPurpleText};
              width: 112px;
              padding: 6px;
              color: ${theme.color.principals.white};
              border-radius: 0.2rem;
              font-size: 14px;
              text-align: center;
              font-weight: 600;
            }
          }

          .top-header-img {
            border-radius: 0 1rem 0 0;
          }
          img {
            width: 100%;
          }
        }

        .professionals {
          background-color: white;
          border-radius: 1rem;
          grid-area: professionals;
        }

        .close-contact {
          background-color: white;
          border-radius: 1rem;
          grid-area: close-contact;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 50vh;
          height: auto;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          grid-auto-flow: column;
          grid-column-gap: 60px;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          margin: 0 auto;
          justify-items: center;
          img {
            width: 70%;
          }
          p {
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 16px;
            line-height: 1.4rem;
          }
          .hero-sub-image {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
          .hero-sub-text {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-row-gap: 40px;
            width: 80%;
            justify-items: center;
          }
        }

        .reviews {
          background-color: white;
          border-radius: 1rem;
          grid-area: reviews;
        }

        .differences {
          background-color: white;
          border-radius: 1rem;
          grid-area: differences;
          display: flex;
          width: 100%;
          height: auto;
          min-height: 60vh;
          padding: 50px 10%;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          h2 {
            color: ${theme.color.principals.darkerPurpleText};
            margin-bottom: 30px;
          }
          .plans-sub {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
          }
          .plans-sub-text {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            h2 {
              margin-bottom: 50px !important;
            }
            h3 {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 28px;
              font-weight: 700;
            }
          }
        }

        .steps {
          background-color: white;
          border-radius: 1rem;
          grid-area: steps;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          width: 100%;
          min-height: 50vh;
          height: auto;
          -ms-flex-align: center;
          -ms-flex-align: center;
          grid-auto-flow: column;
          grid-column-gap: 60px;
          justify-items: center;
          img {
            width: 70%;
            margin-bottom: 30px;
          }
          .hero-sub-image {
            display: flex;
            flex-direction: column;
            width: 70%;
            align-items: center;
            justify-content: center;
          }
          h3 {
            text-align: center;
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 16px;
            line-height: 1.4rem;
            margin-bottom: 10px;
            font-weight: 700;
          }
          p {
            text-align: center;
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 16px;
            line-height: 1.4rem;
          }
        }

        .contact {
          background-color: white;
          border-radius: 1rem;
          grid-area: contact;
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
