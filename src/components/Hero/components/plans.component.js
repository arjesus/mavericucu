import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme.yaml';

const Plans = props => {
  return (
    <React.Fragment>
      <div className="plan">
        <ul>
          <div className="title">
            <h3>Eva Minerva</h3>
          </div>
          <li>
            <p>Habla con tu psicólogo online desde cualquier lugar</p>
          </li>
          <li>
            <p>Facilidad para probar. Primera sesión gratuita</p>
          </li>
          <li>
            <p>Todos nuestros psicólogos si están titulados y colegiados</p>
          </li>
          <li>
            <p>Terapia desde 35 euros la sesion</p>
          </li>
          <li>
            <p>
              Encontramos el psicólogo online que más se adapta a ti mediante una sesión personal
              con un especialista guia. Además, te facilitamos cambiar de psicologo en cualquier
              momento.
            </p>
          </li>
        </ul>
        <ul className="others-list">
          <div className="title">
            <h3>Otras terapias</h3>
          </div>
          <li>
            <p>Tienes que moverte a un piso del centro de ciudad</p>
          </li>
          <li>
            <p>Te dan una sesión informativa gratuita, no una terapia.</p>
          </li>
          <li>
            <p>Trabajan con psicólogos online con poca cualificación</p>
          </li>
          <li>
            <p>Psicologos online cobrando precios nada accesibles </p>
          </li>
          <li>
            <p>
              Te asignan un psicólogo online sin fundamento, basándose en una conversación de chat
              con un ciber robot. Además cambiar de psicólogo no es una facilidad
              <br />
            </p>
          </li>
        </ul>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .plan {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 1rem;
          box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
            0 6px 14px 0 #4e3b80;
          ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            display: flex;
            align-items: center;
            color: ${theme.color.principals.darkerPurpleText};
            justify-content: end;
            .title {
              height: 50px;
              display: flex;
            }
            h3 {
              padding: 10px 0;
              width: 100%;
              text-align: center;
            }
            li {
              padding: 7px 0;
              list-style: none;
              border-bottom: 0.5px solid ${theme.color.principals.lightGray} !important;
              min-height: 120px !important;
              height: auto;
              p {
                padding: 0 30px;
                width: 100%;
                text-align: center;
              }
            }
          }
          .others-list {
            background-color: ${theme.color.principals.lightGray};
            border-radius: 0 1rem 0 0;
            color: ${theme.color.principals.darkerPurpleText};
            border-bottom: 0.5px solid ${theme.color.principals.lightGray};
          }
        }
        @media (max-width: 600px) {
          li {
            p {
              padding: 0 5px !important;
              font-size: 1rem !important;
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Plans.propTypes = {
  html: PropTypes.string
};

export default Plans;
