import React, { useState } from 'react';
import Contact from '../Contact-inserted';
import DatePickerMaterialComponent from './date-picker/datepicker.material';
import theme from '../../theme/theme.yaml';
import { Link } from 'gatsby';
import {postFormAnswers} from '../../services/form'

const feelingsArr = ['Ansiedad', 'Tristeza', 'Depresion', 'Agobio', 'Miedo'];

const DynamicForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [feeling, setFeeling] = useState('');
  const [intensity, setIntensity] = useState('');
  const [experience, setExperience] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [body,setBody] = useState("")

  const [answers, setAnswer] = useState([]);

  function handleSubmit(e) {
     
        postFormAnswers({answers:{age,body,email,experience,feeling,gender,name,phone}})
  }
  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-card">
          {formStep < 8 && (
            <div className="form-steps-container">
              {formStep !== 1 && (
                <p className="form-steps-actions" onClick={() => setFormStep(formStep - 1)}>
                  ⟵
                </p>
              )}
              <p className="form-steps-counter">{formStep}/8</p>
              {/* {formStep !== 4 && <p className="form-steps-actions" onClick={()=>setFormStep(formStep + 1)}>siguiente</p>} */}
            </div>
          )}
          {formStep === 1 && (
            <div className="feel-container">
              <h3>¿Como te llamas?</h3>
              <input onChange={event => setName(event.target.value)} />
              <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
            </div>
          )}
          {formStep === 2 && (
            <div className="feel-container">
              <h3>Genial {name} ¿Cuantos años tienes?</h3>
              <input onChange={event => setAge(event.target.value)} />
              <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
            </div>
          )}
          {formStep === 3 && (
            <div className="feel-container">
              <h3>¿Con qué género te identificas?</h3>
              <div className="btn-container">
                {['Hombre', 'Mujer', 'No binario'].map((gender, index) => {
                  return (
                    <button
                      className="feel-btn"
                      key={index.toString()}
                      onClick={() => {
                        return setFormStep(formStep + 1), setGender(gender);
                      }}
                    >
                      <span>{gender}</span>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
            </div>
          )}
          {formStep === 4 && (
            <div className="feel-container">
              <h3>¿Cuál es el motivo de tu consulta?</h3>
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

              <p
                className="omit"
                onClick={() => {
                  return setFormStep(formStep + 2), setFeeling('omitido');
                }}
              >
                Omitir
              </p>
            </div>
          )}
          {formStep === 5 && (
            <div className="feel-container">
              <h3>¿Como te sientes físicamente?</h3>
              <div className="btn-container">
                {["Muy bien","Bien","Regular","Mal"].map((feeling, index) => {
                  return (
                    <button
                      className="feel-btn"
                      key={index.toString()}
                      onClick={() => {
                        return setFormStep(formStep + 1), setBody(feeling);
                      }}
                    >
                      <span>{feeling}</span>
                    </button>
                  );
                })}
              </div>

              <p
                className="omit"
                onClick={() => {
                  return setFormStep(formStep + 2), setFeeling('omitido');
                }}
              >
                Omitir
              </p>
            </div>
          )}
          {formStep === 6 && (
            <div className="feel-container">
              <h3>¿Tienes experiencia con terapias anteriores?</h3>
              <div className="btn-container btn-container-two">
                {['Si', 'No'].map((items, index) => {
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
              <p
                className="omit"
                onClick={() => {
                  return setFormStep(formStep + 1), setExperience('omitted');
                }}
              >
                Omitir
              </p>
            </div>
          )}
          {/* {formStep === 7 && (
            <div className="feel-container">
              <DatePickerMaterialComponent
                setFormStep={setFormStep}
                setTime={setTime}
                answers={[feeling, intensity, experience]}
              />
            </div>
          )} */}
          {/* {formStep === 8 && (
            <div className="feel-container">
              <Contact></Contact>
            </div>
          )} */}
          {formStep === 7 && (
            <div className="feel-container feel-container-four">
              <h3>
                Genial {name}, ¿Nos proporcionas tu email y numero de telefono para comunicarnos
                contigo?
              </h3>
              <div className="input-group">
                <input
                  onChange={event => setEmail(event.target.value)}
                  className="input-group__input"
                  id="email"
                  type="text"
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="input-group__label" htmlFor="email">
                  EMAIL
                </label>
              </div>
              <div className="input-group">
                <input
                  onChange={event => setPhone(event.target.value)}
                  className="input-group__input"
                  id="email"
                  type="text"
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="input-group__label" htmlFor="email">
                  PHONE
                </label>
              </div>
              <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
            </div>
          )}
          {formStep === 8 && ( 
            handleSubmit(),
            <div className="feel-container-finish">
              <h3>Gracias {name}, Nos pondremos en contacto cuanto antes.</h3>
              <Link to={'/'} className={'feel-btn'} data-slug={'/'}>
                Volver a la pagina principial
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        input {
          border: none;
          width: 200px;
          border-bottom: 1.5px solid ${theme.color.principals.darkerPurpleText};
          font-size: 20px;
          text-align: center;
          color: ${theme.color.principals.darkerPurpleText};
        }
        button {
          background-color: ${theme.color.principals.darkerPurpleText};
          border: none;
          padding: 7px 40px;
          color: white;
          border-radius: 0.3rem;
          font-size: 15px;
        }

        .feel-container-finish {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.5fr 1fr;
          align-items: center;
          justify-items: center;
          
        }

        .form-steps-container {
          display: flex;
          color: grey;
          align-items: center;
          justify-content: center;

          .form-steps-counter {
            margin: 0 8px;
            color: ${theme.color.principals.darkerPurpleText};
          }
          .form-steps-actions {
            cursor: pointer;
          }
        }
        .omit {
          color: grey;
          text-decoration: underline;
          cursor: pointer;
        }
        .form-container {
          background-color: #fff;
          min-height: 87vh;
          height: auto;
          width: 100%;
          padding: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 75px;

          .form-card {
            box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
              0 6px 14px 0 #4e3b80;
            border-radius: 1rem;
            width: 50%;
            height: 300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.1fr 1fr;

            .feel-container-four {
              grid-template-rows: 0.5fr 0.7fr 0.7fr 0.5fr !important;
              h3 {
                width: 75%;
                text-align: center;
                font-size: 20px;
              }
              .input-group {
                width: 40%;
                height: auto;
                position: relative;
                &__input {
                  display: block;
                  -moz-appearance: none;
                  -webkit-appearance: none;
                  appearance: none;
                  width: 100%;
                  background-color: transparent;
                  font-size: 15px;
                  letter-spacing: 0.1em;
                  color: ${theme.color.principals.darkerPurpleText};
                  padding: 8px 4px;
                  outline: none;
                  border: none;
                  border-radius: 0px;
                  border-bottom: 1.2px solid ${theme.color.principals.darkerPurpleText};
                  &:valid ~ .input-group__label {
                    color: ${theme.color.principals.darkerPurpleText};
                  }
                  &:invalid ~ .input-group__label {
                    color: ${theme.color.principals.darkerPurpleText};
                  }
                  &:placeholder-shown ~ .input-group__label {
                    color: ${theme.color.principals.darkerPurpleText};
                  }
                  /* Floating animation */
                  &:focus ~ .input-group__label,
                  &:not(:placeholder-shown) ~ .input-group__label {
                    transform: translateX(-8px) translateY(-28px) scale(0.8);
                  }
                }
                &__label {
                  font-size: 13px;
                  letter-spacing: 0.05em;
                  position: absolute;
                  top: 8px;
                  left: 4px;
                  cursor: text;
                  transition: all 0.3s ease;
                }
              }
            }

            .feel-container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 0.5fr 1fr 0.5fr;
              align-items: center;
              justify-items: center;

              .btn-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 10px;
                .feel-btn {
                  padding: 10px 30px;
                  background-color: white;
                  color: ${theme.color.principals.darkerPurpleText};
                  font-size: 20px;
                  text-align: center;
                  border: 0.5px solid ${theme.color.principals.darkerPurpleText};
                }
              }

              .btn-container-two {
                grid-template-columns: 1fr 1fr;
              }
            }
          }
          .form-integrated {
            margin-top: 20px;
            width: 70%;
          }
          h3 {
            color: #4e3b80;
            font-size: 28px;
            font-weight: 400;
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
            margin: 3px 0;
          }
          .btn-container {
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default DynamicForm;
