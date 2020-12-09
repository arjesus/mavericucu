import React from 'react';
import PropTypes from 'prop-types';
import womanWorried from '../../images/jpg/mujer-en-sofa.jpg';
import capturaDePantalla from '../../images/jpg/woman-doing-videocall.jpg';
import Evaluations from '../evaluations/evaluations.js';
import Psychology from '../psychology/psychology';
import Plans from './components/plans.component';

import paso1 from '../../../static/images/paso1.svg';
import paso2 from '../../../static/images/paso3.svg';
import paso3 from '../../../static/images/paso2.jpg';
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
              <Grid container direction="row">
                <Grid item md={6} sm={12} lg={4} className="center-button">
                  <a href="/plans">Comenzar</a>
                </Grid>
                <Grid item md={6} sm={12} lg={1}></Grid>
                <Grid item md={6} sm={12} lg={4}>
                  {/* <a href="#link-to-form-section">Mirar video</a> */}
                </Grid>
              </Grid>
            </div>
            {/* {typeof window !== 'undefined' && window.innerWidth <= 600 && (
              <a href="#link-to-form-section" className="mobile-button">
                Reserva tu cita online
              </a>
            )} */}
            <img className="top-header-img" src={womanWorried} alt="Mujer preocupada" />
          </div>
          {typeof window !== 'undefined' && window.innerWidth > 600 && (
            <div className="call-to-action">
              <h2>
                <strong>
                  Ayuda psicológica especial durante periodo de confinamiento con psicólogos
                  especializados en el impacto emocional del coronavirus COVID-19
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
              <p>
                Nuestros especialistas guías te contactaran sin ningún coste para de forma segura y
                privada poder encontrar el psicólogo online que más se adapte a tus necesidades,
                además, la primera sesión con tu psicólogo online será gratuita.
              </p>
              <p>Empieza tu terapia mediante video, teléfono o chat hoy mismo.</p>
            </div>
            <a href="/plans">Reserva tu cita</a>
          </div>
          <div className="hero-sub-image">
            <img src={capturaDePantalla} alt="Mujer psicologa ayudando" />
          </div>
        </div>
        <div className="reviews">
          <Evaluations />
        </div>
        <div className="differences">
          <h2>¿Por qué nos eligen con respecto a otras terapias?</h2>
          <div className="blockColumn plans-sub">
            <div className="plans-sub-text">
              <h3>Primera Sesiones Gratuitas con tu psicólogo online y tu especialista guia</h3>
              <img src={webAssistance} />
              <a href="/plans" className="plans-botton">
                Empezar
              </a>
            </div>
            <Plans />
          </div>
        </div>
        <div className="steps">
          <h2>Sin compromiso. Fácil, asequible y 100% adaptado a ti </h2>
          <div className="steps-img-container">
            <div className="hero-sub-image">
              <img src={paso1} alt="Mujer psicologa ayudando" />
              <h3>Contactanos</h3>
              <p>
                Mediante nuestro formulario web nuestros especialistas guías te contactaran en la
                hora y momento que solicites.
              </p>
            </div>
            <div className="hero-sub-image">
              <img src={paso2} alt="Mujer psicologa ayudando" />
              <h3>Habla con nuestro especialista guia</h3>
              <p>
                Nuestros especialistas te contactaran para encontrar el psicólogo online más
                adaptado a ti.
              </p>
            </div>
            <div className="hero-sub-image">
              <img src={paso3} alt="Mujer psicologa ayudando" />
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
                <strong>lo que cuenta es tu experiencia. </strong>
              </p>
            </div>
            <a href="/plans">Empezar</a>
          </div>
          <div className="hero-sub-image">
            <img src={logo} alt="Mujer psicologa ayudando" />
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
          padding: 65px 0 20px 0;
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

          .call-to-action {
            background-color: ${theme.color.principals.greenDark};
            color: white;
            height: 100%;
            border-radius: 0 0 1rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {
              font-size: 19px;
              line-height: 1.5;
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
              font-size: 19px;
              line-height: 1.4;
              margin-bottom: 50px;
            }

            a {
              background-color: ${theme.color.principals.darkPurple};
              width: 200px;
              padding: 19px 50px;
              color: ${theme.color.principals.white};
              border-radius: 0.5rem;
              font-size: 1em;
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
            line-height: 1.7rem;
            color: ${theme.color.principals.darkerPurpleText};
            h2 {
              font-size: 2em;
            }
            p {
              margin-top: 10px;
              font-size: 1em;
            }
            a {
              background-color: ${theme.color.principals.darkPurple};
              width: 163px;
              padding: 19px 23px;
              color: ${theme.color.principals.white};
              border-radius: 0.2rem;
              font-size: 1em;
              text-align: center;
              font-weight: 600;
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
            justify-content: space-evenly;
            align-items: center;
            h3 {
              color: ${theme.color.principals.greenLight};
              font-size: 28px;
              text-align: center;
            }
            a {
              background-color: ${theme.color.principals.darkPurple};
              width: 160px;
              padding: 19px 23px;
              color: ${theme.color.principals.white};
              border-radius: 0.5rem;
              font-size: 18px;
              text-align: center;
              font-weight: 600;
            }
            img {
              margin: 15px 0;
              width: 61%;
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
          padding: 30px 50px;
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
              width: 50%;
              margin-bottom: 30px;
            }
            h3 {
              text-align: center;
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 1.3em;
              line-height: 1.4rem;
              margin-bottom: 10px;
              font-weight: 700;
            }
            p {
              text-align: center;
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 1em;
              line-height: 1.4rem;
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
          }
        }

        @media (max-width: 600px) {
          .plans-sub {
            grid-gap: 0px;
            h2 {
              margin-button: 0px;
            }
          }
          .grid-container {
            grid-template-rows: 0.5fr 1fr 0.5fr 0.6fr 0.6fr 0.7fr 0.45fr;
            padding-top: 115px;
            padding: 115px 10px 20px 0px;
            text-align: center;
            img {
              border-radius: 1rem;
            }
          }
          .center-button {
            display: flex;
            justify-content: center;
          }
          .header {
            grid-auto-flow: column;
            display: grid;
            min-height: 75vh;
            grid-template-rows: 1fr 0.4fr;
            padding: 25px 0 0 0;

            .top-header {
              display: grid;
              grid-template-rows: 1.6fr 0.4fr;
              grid-template-columns: 1fr;

              .top-header-text {
                padding: 0 15px;
                align-items: center;
              }

              img {
                width: 80%;
                margin: 0 auto;
                border-radius: 1rem;
                margin-top: 70px;
              }
            }
            .center-button {
              justify-content: center;
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
          }
          .close-contact {
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
