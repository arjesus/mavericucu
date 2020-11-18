import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from '@material-ui/pickers';
import React from 'react';
import chatImg from '../../images/jpg/conversaicon-digital-01.svg';
import theme from '../../theme/theme.yaml';

const useStyles = makeStyles({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .MuiGrid-container': {
			width: '50%',
			backgroundColor: theme.color.principals.white,
			zIndex: 9999999
		}
	},
	paper: {
		border: '2px solid #000'
	},
	title: {
		fontSize: '2.3rem',
		lineHeight: '1.3',
		color: theme.color.principals.darkerPurpleText,
		margin: '3rem 0 1.5rem 0',
		textAlign: 'center'
	},
	paragraph: {
		fontSize: '1.2rem',
		color: theme.color.principals.blackText,
		marginBottom: '2rem',
		textAlign: 'center'
	},
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
	},
	modalImg: {
		width: '250px'
	}
});

const UserInformationModal = ({ handleClose, open, handleOpen }) => {
	const [ selectedDate, handleDateChange ] = React.useState(new Date());

	const isEmailValid = (email) => {
		const numberRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return numberRegex.test(String(email).toLowerCase());
	};
	const validEmail = isEmailValid('formFields.email');
	const classes = useStyles();

	return (
		<div>
			<Modal maxWidth="sm" fullWidth className={classes.modal} open={open} onClose={handleClose}>
				<Grid container spacing={2} direction="column" justify="center" alignItems="center">
					<Grid item md={12}>
						<img className={classes.modalImg} src={chatImg} alt="Dos personas hablando" />
					</Grid>
					<Grid item md={12}>
						<h2>¡Perfecto, has elegido el Plan Semanal!</h2>
					</Grid>
					<Grid item md={10}>
						<p>
							Solo necesitamos la siguiente información y que confirmes el pago para que nuestros
							especialistas guías te contacten
						</p>
					</Grid>
					<Grid container spacing={2} direction="row" justify="center" alignItems="center">
						<Grid item md={6}>
							<TextField
								name="username"
								variant="filled"
								color="primary"
								fullWidth
								label={'gdfgdfgdfg'}
								value={'asdasd'}
							/>
						</Grid>
						<Grid item md={6}>
							<TextField
								name="username"
								variant="filled"
								color="primary"
								fullWidth
								label={'gdfgdfgdfg'}
								value={'asdasd'}
							/>
						</Grid>
						<Grid item md={6}>
							<TextField
								name="email"
								error={!validEmail}
								helperText={!validEmail && 'Email incorrecto'}
								placeholder="email@address.com"
								fullWidth
								type="email"
								label="email"
								value="aaaaaaaaaaaaaaaa"
							/>
						</Grid>
						<Grid item md={6}>
							<TextField
								name="email"
								error={!validEmail}
								helperText={!validEmail && 'Email incorrecto'}
								placeholder="email@address.com"
								fullWidth
								type="email"
								label="email"
								value="aaaaaaaaaaaaaaaa"
							/>
						</Grid>
						<Grid item md={6}>
							{/* <DateTimePicker
							renderInput={(props) => <TextField variant="outlined" {...props} />}
							label="DateTimePicker"
							value={selectedDate}
							onChange={handleDateChange}
						/> */}
						</Grid>
            <Grid item md={6}>
							{/* <DateTimePicker
							renderInput={(props) => <TextField variant="outlined" {...props} />}
							label="DateTimePicker"
							value={selectedDate}
							onChange={handleDateChange}
						/> */}
						</Grid>
						<Grid item md={6}>
							<button className={classes.button} aria-label="scroll" onClick={handleClose}>
								Elegir Plan
							</button>
						</Grid>
						<Grid item md={6}>
							<button className={classes.button} aria-label="scroll" onClick={handleClose}>
								Elegir Plan
							</button>
						</Grid>
					</Grid>
				</Grid>
			</Modal>
		</div>
	);
};

export default UserInformationModal;
