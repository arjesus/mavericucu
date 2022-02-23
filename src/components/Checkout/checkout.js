import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import { postSortFormAnswers, checkOut } from '../../services/form';

const useStyles = makeStyles({
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    padding: '9px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '1rem',
    cursor: 'pointer'
  },
  buttonDisable: {
    backgroundColor: theme.color.principals.darkPurple,
    padding: '9px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '1rem',
    opacity: '0.4'
  }
});

const Checkout = ({ id, answer, handleClose, disable }) => {
  const classes = useStyles();
  const offers = [
    process.env.GATSBY_BUTTON_SKU_ID_ONE,
    process.env.GATSBY_BUTTON_SKU_ID_FOUR,
    process.env.GATSBY_BUTTON_SKU_ID_EIGHT,
    process.env.GATSBY_BUTTON_SKU_ID_COUPLE
  ];

  const redirectToCheckout = async (event, id) => {
    event.preventDefault();
    const redirect = await checkOut({
      email: answer.email,
      price: offers[id]
    });
    window.location.href = redirect.url;
  };

  const handleClick = (e, answer, id) => {
    postSortFormAnswers({ answers: answer });
    if (typeof window !== 'undefined' && localStorage.getItem('plan')) {
      window.gtag &&
        window.gtag('event', 'conversion', {
          send_to: 'AW-382469846/48gMCO7ts4wCENaNsLYB',
          value: localStorage.getItem('plan'),
          currency: 'EUR',
          transaction_id: localStorage.getItem('id')
        });
      window.gtag &&
        window.gtag('event', 'begin_checkout', {
          currency: 'EUR',
          value: localStorage.getItem('plan')
        });
      window.fbq &&
        window.fbq('track', 'Lead', { currency: 'EUR', value: localStorage.getItem('plan') });
    }
    redirectToCheckout(e, id);
    handleClose();
  };

  return (
    <React.Fragment>
      <button
        className={disable ? classes.buttonDisable : classes.button}
        aria-label="scroll"
        onClick={e => handleClick(e, answer, id)}
        disabled={disable}
      >
        {disable ? 'Completar todos los campos' : 'Continuar con el pago'}
      </button>
    </React.Fragment>
  );
};

export default Checkout;
