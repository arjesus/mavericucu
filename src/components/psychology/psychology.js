import React from 'react';
import theme from '../../theme/theme.yaml';

import logo from '../../../static/images/lirio.png';
import fondo from '../../images/jpg/barco-tres-encima.png';
import terapeuta1 from '../../../static/images/psychology/1.png';
import terapeuta2 from '../../../static/images/psychology/2.png';
import terapeuta3 from '../../../static/images/psychology/3.png';
import terapeuta4 from '../../../static/images/psychology/4.png';
import terapeuta5 from '../../../static/images/psychology/5.png';

const arrOfData = [
  {
    number: 5,
    name: 'luis',
    speciality: 'Especialista en problemas de autoestima',
    text:
      'Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.',
    img: terapeuta5
  },
  {
    number: 4,
    name: 'Pedro',
    speciality: 'Especialista en fobias',
    text:
      'Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.',
    img: terapeuta4
  },
  {
    number: 3,
    name: 'Raquel',
    speciality: 'Especialista en ansiedad',
    text:
      'Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.',
    img: terapeuta3
  },
  {
    number: 2,
    name: 'Melisa',
    speciality: 'Especialista en sexualidad',
    text:
      'Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.',
    img: terapeuta2
  },
  {
    number: 1,
    name: 'Sara',
    speciality: 'Especialista en problemas de pareja',
    text:
      'Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.',
    img: terapeuta1
  }
];

const Psychology = props => {
  const cardToRender = [];
  for (let i = 0; i <= 2; i += 1) {
    const randomPsuchology = Math.random;
    cardToRender.push(
      <div className="card-container" key={i.toString()}>
        <div className="header-card">
          <img src={arrOfData[i].img} />
          <div>
            <h3>{arrOfData[i].name}</h3>
            <p>{arrOfData[i].speciality}</p>
          </div>
        </div>
        <p>{arrOfData[i].text}</p>
        {/* --- STYLES --- */}
        <style jsx>{`
          .card-container {
            padding: 15px 25px;
            background-color: ${theme.color.principals.white};
            border-radius: 0.5rem;
            width: 80%;
            justify-self: center;
          }

          .header-card {
            display: grid;
            grid-template-columns: 0.3fr 1fr;
            img {
              width: 70px;
              border-radius: 50%;
            }
            h3 {
              font-size: 1.2em;
              text-align: start;
            }
            p {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 1.1em;
              font-weight: 600;
            }
          }
          p {
            margin-top: 10px;
            color: ${theme.color.principals.darkerPurpleText};
            font-size: 1.3em;
          }
          @media (max-width: 600px) {
            .card-container {
              border: 1px solid ${theme.color.principals.veryLightPurple};
              width: 100%;
            }
            p {
              text-align: start;
            }
          }
        `}</style>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="psychology-container">
        <div>
          <h2>Cientos de profesionales,</h2>
          <h2>Titulados y disponibles en la palma de tu mano</h2>
        </div>
        <div className="psychology-text-container">
          <p>
            Cientos de psicólogos online, titulados, colegiados y con amplia experiencia en diversas
            áreas, esto es lo que nos permite encontrar el psicólogo más adaptado a ti y a tus
            necesidades.
          </p>
          <p>
            Además, la red Eva Minerva cuenta con profesionales de otras áreas relacionadas con la
            salud y bienestar, como por ejemplo nutricionistas, coaches o profesional de la
            actividad física, esto hace posible que tú y tu psicólogo online podáis trabajar
            conjuntamente con profesionales de diferentes ámbitos, guiandote de la manera más
            especializada y práctica posible.
          </p>
        </div>
        <img className="psycology-img" src={fondo} />
        <div className="psychology-card">{cardToRender}</div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .psychology-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.2fr 0.2fr 0.2fr;
          min-height: 80vh;
          width: 100%;
          grid-gap: 2rem;
          padding: 35px 60px 0px 60px;
          height: auto;
        }
        .psychology-text-container {
          width: 100%;
          margin: 0 auto;
        }
        .psychology-card {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2rem;
          padding: 50px 30px;
          margin: 0 -60px;
          border-radius: 0 0 1rem 1rem;
          background-color: ${theme.color.principals.veryLightPurple};
        }
        h2 {
          color: ${theme.color.principals.darkerPurpleText};
          font-size: 2em;
          text-align: center;
        }
        p {
          text-align: center;
          color: ${theme.color.principals.darkerPurpleText};
          font-size: 1.3em;
          margin-bottom: 25px;
        }

        .psycology-img {
          width: 27%;
          margin: 0 auto;
          margin-bottom: -57px;
        }
        @media (max-width: 600px) {
          .psychology-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 0.2fr 0.3fr;
            min-height: 70vh;
            width: 100%;
            grid-gap: 1rem;
            padding: 20px;
          }
          .psychology-card {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            padding: 0;
            margin: 0;
            background-color: ${theme.color.principals.white};
          }
          .psycology-img {
            width: 70%;
            margin-bottom: 0px;
          }
          .card-container {
            border: 1px solid ${theme.color.principals.veryLightPurple};
            width: 100%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Psychology;
