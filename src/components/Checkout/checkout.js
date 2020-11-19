import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import { postFormAnswers } from '../../services/form';

const useStyles = makeStyles({
	button: {
		backgroundColor: theme.color.principals.darkerPurpleText,
		padding: '5px 15px',
		color: 'white',
		fontWeight: '500',
		textAlign: 'center',
		fontSize: '1.2rem',
		borderRadius: '0.5rem',
		cursor: 'pointer'
	}
});

const Checkout = ({ id, answer, handleClose }) => {
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
			items: [ { sku: offers[id], quantity: 1 } ],
			successUrl: `${window.location.origin}/payment/`,
			cancelUrl: `${window.location.origin}/`
		});

		if (error) {
			console.warn('Error:', error);
		}
	};

	const handleClick = (e, answer, id) => {
		postFormAnswers({ answers: answer });
		redirectToCheckout(e, id);
		handleClose();
	};

	return (
		<React.Fragment>
			<button className={classes.button} aria-label="scroll" onClick={(e) => handleClick(e, answer, id)}>
				Confirmar información y hacer el pago
			</button>
		</React.Fragment>
	);
};

export default Checkout;
