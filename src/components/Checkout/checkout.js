import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import { postSortFormAnswers } from '../../services/form';

const useStyles = makeStyles({
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    padding: '9px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '1rem'
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

  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
  const offers = [
    process.env.GATSBY_BUTTON_SKU_ID_ONE,
    process.env.GATSBY_BUTTON_SKU_ID_FOUR,
    process.env.GATSBY_BUTTON_SKU_ID_EIGHT
  ];

  const redirectToCheckout = async (event, id) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      customerEmail: answer.email,
      items: [{ sku: offers[id], quantity: 1 }],
      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/plans`
    });

    if (error) {
      console.warn('Error:', error);
    }
  };

  const handleClick = (e, answer, id) => {
    redirectToCheckout(e, id);
    postSortFormAnswers({ answers: answer });
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
