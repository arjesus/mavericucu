import React from "react";
import PropTypes from "prop-types";
import womanWorried from '../../../static/images/mujer.preocupada.jpg';
import psicoHelp from '../../../static/images/mujer-psicologa-ayudando.jpg';
import Evaluations from '../evaluations/evaluations.js';
import DynamicForm from '../dynamic-form/dynamic-form';

const Hero = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          Psicólogos online. Estabilidad emocional <strong> cuando más la necesites </strong> cuando más la necesites
        </h1>
        <div>
          <img src={womanWorried} alt="Mujer preocupada" />
        </div>
      </section>
      <section className="hero-bar">
        <h2>
          Ayuda psicológica especial durante periodo de confinamiento con psicólogos
         especializados en el impacto emocional del <strong>coronavirus COVID-19.</strong>
        </h2>
        <button aria-label="scroll">
          Comenzar
        </button>
      </section>
      <div className="padding-block">
        <section className="hero-sub-header">
          <div className="hero-sub-image">
            <img src={psicoHelp} alt="Mujer psicologa ayudando" />
          </div>
          <div className="hero-sub-text">
            <h2>
              Atención especializada y de calidad
          </h2>
            <p>
              Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.
          </p>
            <button>
              Contactanos
        </button>
          </div>
        </section>
        <section className="hero-block-images-header">
          <div className="hero-sub-image">
            <img src={psicoHelp} alt="Mujer psicologa ayudando" />
            <h3>Contactanos </h3>
            <p>
              Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que  blabla.
          </p>
          </div>
          <div className="hero-sub-image">
            <img src={psicoHelp} alt="Mujer psicologa ayudando" />
            <h3>Habla con nuestro especialista guia </h3>
            <p>
              Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.
          </p>
          </div>
          <div className="hero-sub-image">
            <img src={psicoHelp} alt="Mujer psicologa ayudando" />
            <h3>Comienza tu terapia online </h3>
            <p>
              Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.
          </p>
          </div>
        </section>
      </div>
      <Evaluations />
      <DynamicForm />
      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 80vh;
          height: 100px;
          justify-content: center;
          align-items: center;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
          grid-auto-flow: column;
          grid-column-gap: 60px;
          img {
            width: 80%;
          }
        }
        .padding-block {
          padding: 50px 10%;
          .hero-sub-header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 50vh;
            height: 100px;
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
            h2 {
              color: ${theme.hero.h1.color};
              font-size: 35px;
              font-weight: 700;
            }
            p {
              color: ${theme.hero.h1.color};
              font-size: 16px;
              line-height: 1.4rem;
            }
            .hero-sub-image {
              display: flex;
              justify-content: center;
            }
            .hero-sub-text {
              display: grid;
              grid-template-rows: 1fr 1fr;
              grid-row-gap: 40px;
              width: 80%;
              justify-items: center;
            }
            button {
              padding: 7px 69px;
              background-Color: ${theme.hero.bar.colorBackground};
              border: groove 0.5em ${theme.hero.bar.color};  
              border-radius: 1em;
              color: ${theme.hero.bar.color};
              font-size: 18px;
              cursor: pointer;
              width: 50%;
            }
          }
          .hero-block-images-header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 100%;
            min-height: 50vh;
            height: 100px;
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
              color: ${theme.hero.h1.color};
              font-size: 16px;
              line-height: 1.4rem;
              margin-bottom: 10px;
              font-weight: 700;
            }
            p {
              text-align: center;
              color: ${theme.hero.h1.color};
              font-size: 16px;
              line-height: 1.4rem;
            }
          }
        }
        .hero-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 20vh;
          height: 100px;
          justify-items: center;
          background-color: ${theme.hero.bar.colorBackground};
          align-items: center;
          grid-auto-flow: column;
          padding: 0 15%;
          h2 {
            color: ${theme.hero.bar.color};
          }
          button {
            padding: 7px 69px;
            background-Color: ${theme.hero.bar.color};
            border: groove 0.5em ${theme.hero.bar.colorBackground};  
            border-radius: 1em;
            color: ${theme.hero.h1.color};
            font-size: 18px;
            cursor: pointer;
          }
        }
        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          :global(strong) {
            position: relative;
            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
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