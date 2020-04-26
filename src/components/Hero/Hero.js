import React from 'react';
import PropTypes from 'prop-types';
import womanWorried from '../../../static/images/mujer-sofa-gato.jpg';
import capturaDePantalla from '../../../static/images/capturaPantalla.png';
import fondo from '../../../static/images/fondo.jpg';
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
      <section className="hero">
        <div>
          <h1>Psicólogos online. Estabilidad emocional cuando más la necesites</h1>
          <p>
            Ayuda psicológica especial durante periodo de confinamiento con psicólogos
            especializados en el impacto emocional del coronavirus COVID-19.
          </p>
        </div>
        {typeof window !== 'undefined' && window.innerWidth <= 600 && (
          <a href="#link-to-form-section" className="mobile-button">
            Reserva tu cita online
          </a>
        )}
        <div>
          <img src={womanWorried} alt="Mujer preocupada" />
        </div>
      </section>
      {typeof window !== 'undefined' && window.innerWidth > 600 && (
        <section className="hero-bar">
          <h2>
            Ayuda psicológica especial durante periodo de confinamiento con psicólogos
            especializados en el impacto emocional del <strong>coronavirus COVID-19.</strong>
          </h2>
          <a href="#link-to-form-section">Contactanos</a>
        </section>
      )}
      <div className="padding-block">
        <section className="hero-sub-header">
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
        </section>
        <h2>Fácil, asequible y 100% adaptado a ti</h2>
        <section className="hero-block-images-header">
          <div className="hero-sub-image">
            <img src={paso1} alt="Mujer psicologa ayudando" />
            <p>
              Contactanos. Mediante nuestro formulario web o llamada telefónica, nos pondremos en
              contacto contigo en la hora y momento que solicites.
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
        </section>
      </div>
      <Evaluations />
      <Psychology />
      <section id="link-to-form-section" className="plans-block">
        <h2>¿Por qué nos eligen con respecto a otras terapias?</h2>
        <div className="plans-sub">
          <Plans />
          <div className="plans-sub-text">
            <h2>Primera cita gratis</h2>
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
      </section>
      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 0.7fr 1fr;
          min-height: 77.7vh;
          height: auto;
          justify-content: center;
          align-items: center;
          grid-auto-flow: column;
          padding-left: 50px;
          img {
            width: 100%;
          }
        }

        h1 {
          text-align: left;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.color.principals.darkerPurpleText};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 'Open Sans';
        }

        p {
          font-size: 1rem;
          color: ${theme.color.principals.darkerPurpleText};
          text-align: left;
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
              padding: 11px 0px;
              width: 70%;
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

        .padding-block {
          padding: 50px 10%;
          background: url(${fondo}) no-repeat center center fixed; 
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          .hero-sub-header {
            bacnkground-color: white;
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
          h2 {
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 35px;
            font-weight: 700;
            margin-top: 50px;
          }
          .hero-block-images-header {
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
            margin-top: 50px;
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
          @media (max-width: 600px) {
            h2 {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 25px;
              font-weight: 600;
              text-align: center;
            }
            .hero-sub-header {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 0.6fr 0.6fr;
              width: 100%;
              justify-items: center;
              img {
                width: 100%;
              }
              .hero-sub-text {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 0.2fr;
                justify-items: center;
                text-align: center;
                width: 100%;
              }
              .hero-sub-image {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 0.6fr 0.2fr;
                width: 100%;
                justify-items: center;
                grid-gap: 15px;
                a {
                  width: 100%;
                  border-radius: 0.5rem;
                  text-align: center;
                }
              }
            }
            .hero-block-images-header {
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
              height: 100%;
              .hero-sub-image {
                width: 100%;
                display: grid;
                grid-template-columns: 0.5fr 1.5fr;
                grid-template-rows: 1fr;
                column-gap: 15px;
                img {
                  width: 100%;
                  margin: 0;
                }
                p {
                  text-align: justify;
                  font-size: 14px;
                  line-height: 1.2rem;
                }
              }
            }
          }
        }
        .hero-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 20vh;
          height: auto;
          justify-items: center;
          background-color: ${theme.color.principals.darkerPurpleText};
          align-items: center;
          grid-auto-flow: column;
          padding: 0 15%;
          h2 {
            color: ${theme.hero.bar.color};
          }
          a {
            background-color: ${theme.color.principals.white};
            color: ${theme.color.principals.darkerPurpleText};
            text-align: center;
          }
        }
        a {
          padding: 7px 0;
          background-color: ${theme.color.principals.darkerPurpleText};
          border: none;
          border-radius: 0.5rem;
          color: ${theme.color.principals.white};
          font-size: 18px;
          cursor: pointer;
          width: 50%;
          margin-top: 20px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .plans-block {
            h2 {
              text-align: center;
              margin-bottom: 25px;
            }
            .plans-sub {
              display: grid;
              grid-template-columns: 1fr !important;
            }
            .plans-botton {
              width: 70% !important;
            }
          }
        }
        .plans-block {
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
              margin-bottom: 20px;
            }
          }
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
