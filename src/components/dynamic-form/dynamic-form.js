import React, { useState } from "react";
import { ThemeContext } from "../../layouts";
import Contact from "../Contact-inserted";

const feelings = ["Ansiedad", "Tristeza", "Depresion", "Agobio", "Miedo"];
const intensity = ["Ligero", "Esta incrementandose", "Es intenso", "Necesito ayuda urgente"];

const DynamicForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [answers, setAnswer] = useState([]);

  return (
    <React.Fragment>
      <div className="form-container">
        {formStep === 1 && (
          <div className="feel-container">
            <h3>¿Como sientes?</h3>
            <div className="btn-container">
              {feelings.map(feeling => {
                return (
                  <button
                    className="feel-btn"
                    href="#"
                    key={indexedDB.toString()}
                    onClick={() => {
                      return setFormStep(formStep + 1), setAnswer(answers, feeling);
                    }}
                  >
                    <span>{feeling}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {formStep === 2 && (
          <div className="feel-container">
            <h3>¿Como de intensos son tus sentimientos?</h3>
            <div className="btn-container">
              {intensity.map(intens => {
                return (
                  <button
                    className="feel-btn"
                    href="#"
                    key={indexedDB.toString()}
                    onClick={() => {
                      return setFormStep(formStep + 1), setAnswer(answers, intens);
                    }}
                  >
                    <span>{intens}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {formStep === 3 && (
          <div className="feel-container">
            <h3>
              Dejanos tus datos y nos pondremos en contacto contigo para asignarte un profesional
            </h3>
            <div className="form-integrated">
              <ThemeContext.Consumer>
                {theme => <Contact theme={theme} answers={answers} />}
              </ThemeContext.Consumer>
            </div>
          </div>
        )}
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .form-container {
          background-color: #fff;
          min-height: 65vh;
          height: 100px;
          width: 100%;
          padding: 20px 0;
          .feel-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;

            .btn-container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 10px;
              .feel-btn {
                padding: 15px 50px;
                background-color: #4e3b80;
                color: #fff;
                font-size: 20px;
                text-align: center;
              }
            }
          }
          .form-integrated {
            margin-top: 20px;
            width: 70%;
          }
          h3 {
            color: #4e3b80;
            font-size: 24px;
          }
        }
        @media (max-width: 600px) {
          .form-container {
            min-height: 40vh;
          }
          .feel-btn {
            padding: 15px 14px;
            font-size: 18px;
          }
          .feel-btn {
            padding: 15px 15px !important;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default DynamicForm;
