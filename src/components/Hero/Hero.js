import React from 'react';
import PropTypes from 'prop-types';
import womanWorried from '../../../static/images/mujer-sofa-01.svg';
import capturaDePantalla from '../../images/jpg/woman-doing-videocall.jpg';
import Evaluations from '../evaluations/evaluations.js';
import Psychology from '../psychology/psychology';
import Plans from './components/plans.component';

import paso1 from '../../../static/images/paso1.svg';
import paso2 from '../../../static/images/paso3.svg';
import paso3 from '../../../static/images/PASO 2-02.svg';
import logo from '../../images/jpg/logo-text.png';
import webAssistance from '../../images/svg-icons/asistencia-online.svg';
import { Grid } from '@material-ui/core';
const Hero = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <div className="grid-container">
        <div className="header">
          <div className="top-header">
            <div className="top-header-text">
              <h1>
                Psicólogos online
                <br /> Equilibrio y superación
                <br /> cuando más lo necesites
              </h1>
              <p>
                Eva Minerva es la red de psicólogos online colegiados, profesionales de la salud y
                bienestar emocional que más se adapta a ti. Número 1 en España.
              </p>
              <Grid className="center-button" item sm={12} md={6} lg={4}>
                <a href="/plans">Comenzar</a>
              </Grid>
              <Grid item sm={12} md={6} lg={1}></Grid>
              <Grid item sm={12} md={6} lg={4}>
                {/* <a href="#link-to-form-section">Mirar video</a> */}
              </Grid>
            </div>
            {/* {typeof window !== 'undefined' && window.innerWidth <= 600 && (
              <a href="#link-to-form-section" className="mobile-button">
                Reserva tu cita online
              </a>
            )} */}
            <img
              className="top-header-img"
              src={womanWorried}
              alt="Mujer preocupada"
              loading="lazy"
              height="616.729"
              width="950"
            />
          </div>
          {typeof window !== 'undefined' && window.innerWidth > 600 && (
            <div className="call-to-action">
              <h2>
                <strong>
                  Ayuda psicológica especial con psicólogos online especializados en el impacto de
                  la Covid-19
                </strong>
              </h2>
            </div>
          )}
        </div>
        <div className="professionals">
          <Psychology />
        </div>
        <div className="close-contact blockColumn">
          <div className="hero-sub-text">
            <h2>Primeras sesiones gratuitas con tu psicólogo online</h2>
            <div>
              <p>La primera sesión con tu psicólogo online es gratuita.</p>
              <p>
                Además, antes de asignarte un psicólogo nuestros especialistas guías te contactaran
                personalmente para encontrar el psicólogo que más se adapta a ti.
              </p>
              <p>Empieza tu terapia mediante video o teléfono hoy mismo.</p>
            </div>
            <a href="/plans">Reserva tu cita</a>
          </div>
          <div className="hero-sub-image">
            <img
              src={capturaDePantalla}
              alt="Mujer psicologa ayudando"
              loading="lazy"
              height="350"
              width="520"
            />
          </div>
        </div>
        <div className="reviews">
          <Evaluations />
        </div>
        <div className="differences">
          <h2>¿Por qué nos eligen con respecto a otras terapias?</h2>
          <div className="blockColumn plans-sub">
            <div className="plans-sub-text">
              <h3>Primeras Sesiones Gratuitas con tu psicólogo online y tu especialista guía</h3>
              <img src={webAssistance} alt="" loading="lazy" height="400" width="600" />
              <a href="/plans" className="plans-botton">
                Empezar
              </a>
            </div>
            <Plans />
          </div>
        </div>
        <div className="steps">
          <h2>Sin compromiso. Fácil, asequible y 100% adaptado a ti</h2>
          <div className="steps-img-container">
            <div className="hero-sub-image">
              <img
                src={paso1}
                alt="Mujer psicologa ayudando"
                loading="lazy"
                height="250"
                width="300"
              />
              <h3>Contáctanos</h3>
              <p>
                Mediante nuestro formulario indica tu disponibilidad para hablar con un especialista
                guía.
              </p>
            </div>
            <div className="hero-sub-image">
              <img
                src={paso2}
                alt="Mujer psicologa ayudando"
                loading="lazy"
                height="250"
                width="300"
              />
              <h3>Habla con un especialista guía</h3>
              <p>
                Un especialista hablará contigo para conocerte mejor y así encontrar tu psicólogo
                online.
              </p>
            </div>
            <div className="hero-sub-image">
              <img
                src={paso3}
                alt="Mujer psicologa ayudando"
                loading="lazy"
                height="250"
                width="300"
              />
              <h3>Comienza tu terapia online</h3>
              <p>Conoce a tu psicólogo online y empieza tu primera sesión gratuita hoy mismo.</p>
            </div>
          </div>
        </div>
        <div id="link-to-form-section" className="blockColumn contact close-contact">
          <div className="hero-sub-text">
            <h2>Contactanos y comienza a sentirte mejor</h2>
            <div>
              <p>
                Elige a continuación el plan que más se adapte a ti para empezar a disfrutar de tus
                primeras sesiones gratuitas.
              </p>
              <p>
                Podríamos comentar muchas más cosas sobre nuestros profesionales y los buenos
                resultados de nuestra terapia online, pero a la hora de la verdad{' '}
                <strong>lo que cuenta es tu experiencia. </strong>Elige a continuación el plan que
                más se adapte a ti para empezar a disfrutar de tus primeras sesiones gratuitas.
              </p>
            </div>
            <a href="/plans">Elige tu plan</a>
          </div>
          <div className="hero-sub-image">
            <img
              src={logo}
              alt="Mujer psicologa ayudando"
              loading="lazy"
              height="281"
              width="388"
            />
          </div>
        </div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.5fr 1fr 0.6fr 0.7fr 0.4fr 0.7fr 0.6fr;
          gap: 10px 1px;
          grid-template-areas:
            'header'
            'professionals'
            'close-contact'
            'reviews'
            'differences'
            'steps'
            'contact';
        }

        .header {
          background-color: white;
          border-radius: 1rem;
          grid-area: header;
          justify-content: center;
          align-items: center;
          grid-auto-flow: column;
          display: grid;
          grid-template-rows: 1fr auto;
          margin-top: 70px;

          .call-to-action {
            background-color: ${theme.color.principals.greenDark};
            color: white;
            height: 100%;
            border-radius: 0 0 1rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;

            h2 {
              font-size: 19px;
              margin: 20px 0;
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
            padding: 25px 90px;
            justify-content: space-evenly;
            height: 80%;
            align-self: center;
            color: ${theme.color.principals.darkerPurpleText};

            h1 {
              font-size: 2.7em;
              margin-bottom: 30px;
            }

            p {
              font-size: 1.3rem;
              margin-bottom: 50px;
            }

            a {
              background-color: ${theme.color.principals.darkPurple};
              width: 200px;
              padding: 19px 50px;
              color: ${theme.color.principals.white};
              border-radius: 0.5rem;
              font-size: 1.3em;
              text-align: center;
              font-weight: 600;
            }
          }

          .top-header-img {
            border-radius: 0 1rem 0 0;
          }
          img {
            width: 100%;
            height: auto;
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
            width: 80%;
            border-radius: 0.5rem;
          }
          .hero-sub-text {
            display: grid;
            grid-template-rows: 0.1fr 1fr 0.1fr;
            grid-row-gap: 25px;
            width: 80%;
            justify-items: center;
            text-align: center;
            color: ${theme.color.principals.darkerPurpleText};
            h2 {
              font-size: 2em;
            }
            p {
              margin-top: 10px;
              font-size: 1.3em;
            }
            a {
              background-color: ${theme.color.principals.darkPurple};
              padding: 19px 23px;
              color: ${theme.color.principals.white};
              border-radius: 0.5rem;
              font-size: 1.3em;
              text-align: center;
              font-weight: 600;
              margin-bottom: 15px;
            }
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
          padding: 50px 10%;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          h2 {
            color: ${theme.color.principals.darkerPurpleText};
            margin-bottom: 80px;
            font-size: 2em;
          }
          .plans-sub {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 90px;
          }
          .plans-sub-text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 100px 0;
            h3 {
              color: ${theme.color.principals.greenLight};
              font-size: 28px;
              text-align: center;
            }
            a {
              background-color: ${theme.color.principals.darkPurple};
              width: 180px;
              padding: 19px 30px;
              color: ${theme.color.principals.white};
              border-radius: 0.5rem;
              font-size: 19px;
              text-align: center;
              font-weight: 600;
            }
            img {
              margin: 15px 0;
            }
          }
        }
        .hero-sub-image {
          display: flex;
          flex-direction: column;
          width: 80%;
          align-items: center;
          justify-content: center;
        }
        .steps {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background-color: white;
          border-radius: 1rem;
          width: 100%;
          min-height: 70vh;
          height: auto;
          padding: 20px;
          h2 {
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 2em;
          }
          .steps-img-container {
            grid-area: steps;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            -ms-flex-align: center;
            -ms-flex-align: center;
            grid-auto-flow: column;
            grid-column-gap: 60px;
            justify-items: center;
            .block-img {
              display: flex;
              justify-content: end;
            }
            img {
              width: 300px;
              margin-bottom: 30px;
            }
            h3 {
              text-align: center;
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 1.3em;
              margin-bottom: 10px;
              font-weight: 700;
            }
            p {
              text-align: center;
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 1.3em;
            }
          }
        }

        .contact {
          background-color: white;
          border-radius: 1rem;
          grid-area: contact;
          img {
            width: 60%;
            display: block;
            margin: auto;
            height: auto;
          }
        }

        @media (max-width: 750px) {
          .header {
            margin-top: 0;
          }
        }

        @media (max-width: 600px) {
          .plans-sub-text {
            padding: 0 !important;
            max-height: 500px;
            img {
              width: 280px;
            }
          }
          .hero-sub-image {
            img {
              height: auto;
            }
          }
          .center-button {
            display-flex: center;
            justify-content: center;
          }
          .plans-sub {
            grid-gap: 0px;
            h2 {
              margin-button: 0px;
            }
          }
          .grid-container {
            grid-template-rows: auto 1fr 0.39fr 0.6fr 0.59fr 0.8fr auto;
            text-align: center;
            img {
              border-radius: 1rem;
            }
          }
          .header {
            grid-auto-flow: column;
            display: grid;
            min-height: 75vh;
            grid-template-rows: 1fr 0fr;
            padding: 25px 0 0 0;

            .top-header {
              display: grid;
              grid-template-rows: 1.6fr 0.4fr;
              grid-template-columns: 1fr;

              .top-header-text {
                padding: 0 15px;
                align-items: center;
                h1 {
                  font-size: 2em;
                  margin-bottom: 25px;
                }
                p {
                  font-size: 1.2em;
                }
              }

              img {
                margin: 0 auto;
                border-radius: 0 0 1rem 1rem;
                margin-top: 30px;
              }
            }
          }
          .blockColumn {
            display: grid;
            grid-template-rows: 0.4fr 0.5fr !important;
            grid-template-columns: 1fr !important;
            margin: 0;
          }
          .steps-img-container {
            grid-template-columns: 1fr !important;
            grid-template-rows: 1fr 1fr 1fr !important;
          }
          .professionals {
          }
          .reviews {
            padding: 20px 0;
          }
          .differences {
            padding: 20px;
            justify-content: space-around;
          }
          .steps {
            padding: 20px;
          }
          .close-contact {
            padding: 20px;
            img {
              width: 100%;
            }
            .hero-sub-text {
              width: 100%;
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
