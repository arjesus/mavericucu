import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import theme from '../../theme/theme.yaml';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const redirectToCheckout = async event => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: process.env.GATSBY_BUTTON_SKU_ID, quantity: 1 }],
    successUrl: `${window.location.origin}/payment/`,
    cancelUrl: `${window.location.origin}/`
  });

  if (error) {
    console.warn('Error:', error);
  }
};

const Checkout = () => {
  return (
    <React.Fragment>
      <button className="mobile-button" aria-label="scroll" onClick={redirectToCheckout}>
        Reservar tu cita
      </button>
      {/* --- STYLES --- */}
      <style jsx>{`
        .mobile-button {
          padding: 7px 69px;
          background-color: ${theme.color.principals.white};
          border-radius: 1em;
          color: ${theme.color.principals.darkerPurpleText};
          font-size: 18px;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Checkout;
