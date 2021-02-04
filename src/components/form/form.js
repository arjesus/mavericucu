import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    marginBottom: '20px'
  },
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    width: 'fit-content',
    padding: '19px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600'
  },
  textTopBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'inherit'
  },
  title: {
    fontSize: '2.3rem',
    lineHeight: '1.3',
    color: theme.color.principals.darkerPurpleText,
    margin: '3rem 0 4rem 0'
  },
  secondaryTitle: {
    fontSize: '1.5rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '3rem'
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  img: {
    objectFit: 'contain',
    width: '100%'
  }
});

const Form = props => {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': event.target.getAttribute('name'),
  //       ...name
  //     })
  //   })
  //     .then(() => (window.location.href = '/'))
  //     .catch(error => alert(error));
  // };
  return (
    <form data-netlify="true" name="pizzaOrder" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        Estamos trabajando en el formulario.
        {/* <input name="order" type="text" onChange={handleChange} /> */}
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
