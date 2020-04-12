import React, { useState } from "react";
import { ThemeContext } from "../../layouts";
import Contact from "../Contact-inserted";
import DatePickerMaterialComponent from "./date-picker/datepicker.material";

const feelingsArr = ["Ansiedad", "Tristeza", "Depresion", "Agobio", "Miedo"];
const intensityArr = ["Ligero", "Esta incrementandose", "Es intenso", "Necesito ayuda urgente"];

const DynamicForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [feeling, setFeeling] = useState("")
  const [intensity, setIntensity] = useState("")
  const [experience, setExperience] = useState("")
  const [time, setTime] = useState("")

  const [answers, setAnswer] = useState([]);
  console.log(answers);
  console.log(formStep);

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-steps-container">
          {formStep !== 1 && <p className="form-steps-actions" onClick={() => setFormStep(formStep - 1)}>⟵</p>}
          <p className="form-steps-counter">{formStep}/5</p>
          {/* {formStep !== 4 && <p className="form-steps-actions" onClick={()=>setFormStep(formStep + 1)}>siguiente</p>} */}
        </div>
        {formStep === 1 && (
          <div className="feel-container">
            <h3>¿Que sientes?</h3>
            <div className="btn-container">
              {feelingsArr.map((feeling, index) => {
                return (
                  <button
                    className="feel-btn"
                    key={index.toString()}
                    onClick={() => {
                      return setFormStep(formStep + 1), setFeeling(feeling);
                    }}
                  >
                    <span>{feeling}</span>
                  </button>
                );
              })}
            </div>

            <p className="omit" onClick={() => { return setFormStep(formStep + 2), setFeeling("omitido") }}>Omitir</p>
          </div>
        )}
        {formStep === 2 && (
          <div className="feel-container">
            <h3>¿Como de intensos son tus sentimientos?</h3>
            <div className="btn-container">
              {intensityArr.map((items, index) => {
                return (
                  <button
                    className="feel-btn"
                    href="#"
                    key={index.toString()}
                    onClick={() => {
                      return setFormStep(formStep + 1), setIntensity(items);
                    }}
                  >
                    <span>{items}</span>
                  </button>
                );
              })}
            </div>
            <p className="omit" onClick={() => { return setFormStep(formStep + 1), setIntensity("omitido") }}>Omitir</p>
          </div>
        )}
        {formStep === 3 && (
          <div className="feel-container">
            <h3>¿Tienes experiencia con terapias anteriores?</h3>
            <div className="btn-container">
              {["Si", "No"].map((items, index) => {
                return (
                  <button
                    className="feel-btn"
                    href="#"
                    key={index.toString()}
                    onClick={() => {
                      return setFormStep(formStep + 1), setExperience(items);
                    }}
                  >
                    <span>{items}</span>
                  </button>
                );
              })}
            </div>
            <p className="omit" onClick={() => { return setFormStep(formStep + 1), setExperience("omitted") }}>Omitir</p>
          </div>
        )}
        {formStep === 4 && (
          <div className="feel-container">
            <DatePickerMaterialComponent
              setFormStep={setFormStep}
              setTime={setTime}
              answers={[feeling, intensity, experience]}
            />
          </div>
        )}
        {formStep === 5 && (
          <div className="feel-container">
            <h3>
              Dejanos tus datos y nos pondremos en contacto contigo para asignarte un profesional
            </h3>
            <div className="form-integrated">
              <ThemeContext.Consumer>
                {theme => <Contact theme={theme} answers={[time, feeling, intensity, experience]} />}
              </ThemeContext.Consumer>
            </div>
          </div>
        )}

      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
      .form-steps-container{
        display:flex;
        color:grey;
        align-items:center;
        justify-content:center;
        margin-top:100px;

        .form-steps-counter{
          margin:0 8px;
        }
        .form-steps-actions{
          cursor:pointer;
          
        }
      }
      .omit{
        color:grey;
        text-decoration:underline;
        cursor:pointer;
      }
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
            padding: 15px 15px !important;
            margin:3px 0;

          }
          .btn-container{
            display:flex !important;
            flex-direction:column !important;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default DynamicForm;
