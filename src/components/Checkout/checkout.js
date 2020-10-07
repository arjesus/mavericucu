import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
let sku = null;

const redirectToCheckout = async event => {
  console.log(sku, 'aaaaaaaaaaaaaaaaaaaaaaaaa');
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: sku, quantity: 1 }],
    successUrl: `${window.location.origin}/payment/`,
    cancelUrl: `${window.location.origin}/`
  });

  if (error) {
    console.warn('Error:', error);
  }
};

const useStyles = makeStyles({
  button: {
    backgroundColor: theme.color.principals.darkerPurpleText,
    padding: '10px 15px',
    color: 'white',
    width: '230px',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '0.5rem',
    marginBottom: '2rem'
  }
});

const Checkout = props => {
  console.log(props);
  sku = props.sku;
  const classes = useStyles();
  return (
    <React.Fragment>
      <button className={classes.button} aria-label="scroll" onClick={redirectToCheckout}>
        Prueba ahora
      </button>
    </React.Fragment>
  );
};

export default Checkout;
