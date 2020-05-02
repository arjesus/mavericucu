/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";
import { postFormAnswers } from "../../services/form"

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;
  const { answers } = props

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        answers.phone = values.phone
        answers.email = values.email
        postFormAnswers(answers)
        props.setFormStep(9)
      }
    })
  }

  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="form">
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >

              <h3>Gracias {props.answers.name} por tu tiempo!</h3>


              <FormItem>
                <h3>Dejanos un email para que podamos ponernos en contacto contigo</h3>
                <label>Email: </label>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "El formato del email no es válido",
                      whitespace: true,
                      type: "email"
                    }
                  ]
                })(<Input name="email" />)}
              </FormItem>
              <FormItem>
                <label>Teléfono: </label>
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "El campo no puede estar vacío",
                      whitespace: true,
                      type: ""
                    }
                  ]
                })(<Input name="phone" />)}
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={handleSubmit}>
                  Enviar
                </Button>
              </FormItem>
            </Form>

            {/* --- STYLES --- */}
            <style jsx>{`
              .form {
                background: transparent;

                h3 {
                  color: #4e3b80 !important;
                }
              }
              .form :global(.ant-row.ant-form-item) {
                color: #4e3b80 !important;
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                color: #4e3b80 !important;
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
                color: #4e3b80 !important;
              }
              .form :global(.ant-form-item-label) {

                line-height: 1em;
                color: #4e3b80;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                color: #4e3b80 !important;
                margin: 0;
              }
              .form :global(.ant-input) {
                color: #4e3b80 !important;
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                color: #fff !important;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: #4e3b80;
                border: 1px solid #4e3b80;
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

Contact.propTypes = {
  form: PropTypes.object,
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;
