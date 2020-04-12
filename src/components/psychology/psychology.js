import React from "react";

import logo from "../../../static/images/lirio.png";

const arrOfData = [
  {
    number: 5,
    name: "luis",
    text:
      "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    img: { logo }
  },
  {
    number: 4,
    name: "Pedro",
    text:
      "Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.",
    img: { logo }
  },
  {
    number: 3,
    name: "Raquel",
    text:
      "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    img: { logo }
  },
  {
    number: 2,
    name: "Melisa",
    text:
      "Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.",
    img: { logo }
  },
  {
    number: 1,
    name: "Alome",
    text:
      "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    img: { logo }
  }
];

const Psychology = props => {
  const cardToRender = [];
  for (let i = 0; i <= 2; i += 1) {
    console.log(i);
    cardToRender.push(
      <div className="card-container" key={i.toString()}>
        <div className="header-card">
          <img src={logo} />
          <h3>{arrOfData[i].name}</h3>
        </div>
        <p>{arrOfData[i].text}</p>
        {/* --- STYLES --- */}
        <style jsx>{`
          .card-container {
            box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
              0 6px 14px 0 #4e3b80;
            padding: 15px;
          }

          .header-card {
            display: grid;
            grid-template-columns: 0.3fr 1fr;
            img {
              width: 70px;
            }
            h3 {
              color: #4e3b80;
              font-size: 18px;
              text-align: start;
            }
          }
          p {
            margin-top: 10px;
            color: #4e3b80;
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="psychology-container">
        <h2>Cientos de profesionales, titulados y disponibles en la palma de tu mano</h2>
        <p>
          Al hablar con un especialista guia te ofrecemos un cuadro de psicólogos de primer nivel,
          cuidadosamente seleccionados para ti
        </p>
        <div className="psychology-card">{cardToRender}</div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .psychology-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.2fr 0.2fr 0.4fr;
          min-height: 50vh;
          width: 100%;
          grid-gap: 3rem;
          padding: 0 60px;
          margin-top: 120px;
        }
        .psychology-card {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2rem;
        }
        h2 {
          color: #4e3b80;
          font-size: 28px;
          text-align: center;
        }
        p {
          text-align: center;
          color: #4e3b80;
          font-size: 18px;
        }
        @media (max-width: 600px) { 
          .psychology-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 0.2fr 0.4fr;
            min-height: 70vh;
            width: 100%;
            grid-gap: 1rem;
            padding: 0 10px;
            margin-top: 50px;
          }
          .psychology-card {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 2rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Psychology;