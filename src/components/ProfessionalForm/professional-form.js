import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { postFormAnswersProfessionals } from '../../services/form';
import theme from '../../theme/theme.yaml';
import Form from '../form/form';

const ProfessionalForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '9432913',
          formId: '79290615-b5cc-4392-b03d-5fe2fac233b1',
          region: 'na1',
          target: '#hubspotForm'
        });
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-card">
          <h2>¡Gacias por tu interes!</h2>
          <p>En breves nos pondremos en contacto</p>
          <div id="hubspotForm"></div>
        </div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
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
            width: auto;
            height: 600px;
            margin: 0 auto;
            padding: 25px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            p {
              color: ${theme.color.principals.darkerPurpleText};
            }
            h2 {
              color: ${theme.color.principals.darkerPurpleText};
            }
          }
        }
        @media (max-width: 600px) {
          .form-container {
            min-height: 40vh;
            background-color: transparent;

            .form-card {
              width: 100%;
              background-color: ${theme.color.principals.white};
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default ProfessionalForm;

// (          {formStep < 3 && (
//   <div className="form-steps-container">
//     {formStep !== 1 && (
//       <p className="form-steps-actions" onClick={() => setFormStep(formStep - 1)}>
//         ⟵
//       </p>
//     )}
//     <p className="form-steps-counter">{formStep}/3</p>
//     {/* {formStep !== 4 && <p className="form-steps-actions" onClick={()=>setFormStep(formStep + 1)}>siguiente</p>} */}
//   </div>
// )}
// {formStep === 1 && (
//   <div className="feel-container">
//     <h3>¿Como te llamas?</h3>
//     <input onChange={event => setName(event.target.value)} />
//     <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
//   </div>
// )}

// {formStep === 2 && (
//   <div className="feel-container feel-container-four">
//     <h3>
//       Genial {name}, ¿Nos proporcionas tu email y numero de telefono para comunicarnos
//       contigo?
//     </h3>
//     <div className="input-group">
//       <input
//         onChange={event => setEmail(event.target.value)}
//         className="input-group__input"
//         id="email"
//         type="text"
//         placeholder=" "
//         autoComplete="off"
//       />
//       <label className="input-group__label" htmlFor="email">
//         EMAIL
//       </label>
//     </div>
//     <div className="input-group">
//       <input
//         onChange={event => setPhone(event.target.value)}
//         className="input-group__input"
//         id="email"
//         type="text"
//         placeholder=" "
//         autoComplete="off"
//       />
//       <label className="input-group__label" htmlFor="email">
//         PHONE
//       </label>
//     </div>
//     <button onClick={() => setFormStep(formStep + 1)}> Siguiente </button>
//   </div>
// )}
// {formStep === 3 &&
//   (handleSubmit(),
//   (
//     <div className="feel-container-finish">
//       <h3>Gracias {name}, Nos pondremos en contacto cuanto antes.</h3>
//       <Link to={'/'} className={'feel-btn'} data-slug={'/'}>
//         Volver a la pagina principial
//       </Link>
//     </div>
//   ))})
