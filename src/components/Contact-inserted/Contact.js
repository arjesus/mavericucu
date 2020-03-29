/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;

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
        sendMessage(values);
      }
    });
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
              <FormItem>
                <h3>Tu nombre para dirigirnos a ti?</h3>
                {getFieldDecorator("name", {
                  rules: [
                    {
                      whitespace: true
                    }
                  ]
                })(<Input name="name" />)}
              </FormItem>
              <FormItem>
                <h3>Un email para contactarte</h3>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Un email para contactarte",
                      whitespace: true,
                      type: "email"
                    }
                  ]
                })(<Input name="email" />)}
              </FormItem>
              <FormItem>
                <h3>Cuentanos como te sientes</h3>
                {getFieldDecorator("message", {
                  rules: [
                    { required: true, message: "Cuentanos como te sientes", whitespace: true }
                  ]
                })(
                  <TextArea name="message" placeholder="" autosize={{ minRows: 4, maxRows: 10 }} />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Enviar
                </Button>
              </FormItem>
            </Form>

            {/* --- STYLES --- */}
            <style jsx>{`
              .form {
                background: transparent;

                h3 {
                  color: #73a580 !important;
                }
              }
              .form :global(.ant-row.ant-form-item) {
                color: #73a580 !important;
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                color: #73a580 !important;
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
                color: #73a580 !important;
              }
              .form :global(.ant-form-item-label) {

                line-height: 1em;
                color: #73a580;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                color: #73a580 !important;
                margin: 0;
              }
              .form :global(.ant-input) {
                color: #73a580 !important;
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                color: #73a580 !important;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: #73a580;
                border: 1px solid #73a580;
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
  form: PropTypes.object
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;
