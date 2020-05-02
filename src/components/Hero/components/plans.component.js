import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme.yaml';

const Plans = props => {
  return (
    <React.Fragment>
      <div className="plan">
        <ul>
          <h3>Eva Minerva</h3>
          <li>
            <p>Terapia por mensaje o video llamada</p>
          </li>
          <li>
            <p>Analizamos tu caso y asesoramos</p>
          </li>
          <li>
            <p>Amplica cobertura de tratamientos</p>
          </li>
        </ul>
        <ul className="others-list">
          <h3>Otros</h3>
          <li>
            <p>Limitadion en tipos de tratamientos</p>
          </li>
          <li>
            <p>Recae en ti el elegir a un terapeuta</p>
          </li>
          <li>
            <p>Sin asesoramiento</p>
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
            justify-content: center;
            h3 {
              padding: 10px 0;
              box-shadow: 0px 6px 3px -5px rgba(78,59,128,1);
              width: 100%;
              text-align: center;
            }
            li {
              padding: 7px 0;
              -webkit-box-shadow: 0px 6px 3px -5px rgba(78,59,128,1);
              box-shadow: 0px 6px 3px -5px rgba(78,59,128,1);
              list-style: none;
              min-height: 80px;
              height: auto;
              p {
                padding: 0 30px;
                width: 100%;
              }
            }
          }
          .others-list {
            background-color: ${theme.color.principals.lightPurpleBackground};
            border-radius: 0 1rem 0 0;
            color: ${theme.color.principals.gray};
          }
        }
        @media (max-width: 600px) {
          li {
            height: 100px !important;
          }
        }
      `}</style>
    </React.Fragment >
  );
};

Plans.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Plans;
