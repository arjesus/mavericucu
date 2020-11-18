import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import ProfessionalForm from '../components/ProfessionalForm/professional-form';
import logo from '../images/jpg/logo-text.png';
import Checkout from '../components/Checkout/checkout';
import UserInformationModal from '../components/create-user-modal/create-user-modal.componente'

const useStyles = makeStyles({
	plans: {
		padding: '115px 0 50px 0'
	},
	plansContainer: {
		backgroundColor: 'white',
		padding: '45px',
		borderRadius: '1rem'
	},
	plansCards: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		textAlign: 'center',
		padding: '0 !important',
		border: `0.1px solid ${theme.color.principals.lightPurple}`,
		borderTop: 'none'
	},
	plansCardsHeaderFirst: {
		backgroundColor: theme.color.principals.first,
		color: 'white',
		fontSize: '1.5rem',
		height: '70px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '1rem 1rem 0 0',
		marginBottom: '2rem',
		marginTop: '-17px'
	},
	plansCardsHeaderSecond: {
		backgroundColor: theme.color.principals.second,
		color: 'white',
		fontSize: '1.5rem',
		height: '70px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '1rem 1rem 0 0',
		marginBottom: '2rem',
		marginTop: '-15px'
	},
	plansCardsHeaderThird: {
		backgroundColor: theme.color.principals.third,
		color: 'white',
		fontSize: '1.5rem',
		height: '70px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '1rem 1rem 0 0',
		marginBottom: '2rem',
		marginTop: '-15px'
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
	textContainer: {
		padding: '20px 10%'
	},
	plansLogo: {
		width: '300px'
	},
	title: {
		fontSize: '2.3rem',
		lineHeight: '1.3',
		color: theme.color.principals.darkerPurpleText,
		margin: '3rem 0 1.5rem 0',
		textAlign: 'center'
	},
	secondaryTitle: {
		fontSize: '1.5rem',
		color: theme.color.principals.darkerPurpleText,
		marginBottom: '1rem'
	},
	paragraph: {
		fontSize: '1.2rem',
		color: theme.color.principals.blackText,
		marginBottom: '2rem',
		textAlign: 'center'
	},
	paragraphInside: {
		fontSize: '1.2rem',
		color: 'black',
		marginBottom: '3rem',
		color: theme.color.principals.blackText
	},
	paragraphInsideBolder: {
		fontSize: '3rem',
		fontWeight: '700'
	},
	plansBox: {
		marginBottom: '3rem'
	},
	titleSubText: {
		marginBottom: '4rem',
		textAlign: 'center',
		color: theme.color.principals.darkerPurpleText
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
	}
});

const ProfessionalPage = (props) => {
	const [ openModal, setOpenModal ] = useState(false);

	const handleOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
  };
  
	const classes = useStyles();
	return (
		<Box mt={2}>
			<Grid container direction="column" className={classes.plans}>
				<Grid container direction="column" className={classes.plansContainer}>
					<Grid container direction="column" alignItems="center" spacing={5} className={classes.plansBox}>
						<h2 className={classes.title}>Elige tu plan y conoce a tu psicólogo online hoy mismo</h2>
						<Grid item md={12} className={classes.titleSubText}>
							<p>
								Todos nuestros planes incluyen dos sesiones gratuitas: La primera sesión gratuita con tu
								psicólogo online y la primera sesión con el especialista guia. Esto nos permite
								encontrar el psicólogo más especializado y con más experiencia para tus necesidades.
								Además te haremos un reembolso del 100 % de tu plan si tras la sesión gratuita no estás
								100% satisfecho.
							</p>
						</Grid>
						<Grid container justify="space-around" direction="row" spacing={5}>
							<Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
								<div className={classes.plansCardsHeaderFirst}>
									<h3>SEMANAL</h3>
								</div>
								<div className={classes.paragraphInside}>
									<p>1 sesión por</p>
									<p className={classes.paragraphInsideBolder}>35€</p>
									<p />
								</div>
								<p className={classes.paragraph}>
									1ª Sesión psicólogo online gratis + Sesion gratuita con el especialista guia
								</p>
								<button
									className={classes.button}
									aria-label="scroll"
									onClick={handleOpen}
								>
									Elegir Plan
								</button>
							</Grid>
							<Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
								<div className={classes.plansCardsHeaderSecond}>
									<h3>MENSUAL</h3>
								</div>
								<div className={classes.paragraphInside}>
									<p>4 sesiones por</p>
									<p className={classes.paragraphInsideBolder}>29€</p>
									<p>cada una. Total 116€</p>
								</div>
								<p className={classes.paragraph}>
									1ª Sesión psicólogo online gratis + Sesion gratuita con el especialista guia
								</p>
								<button
									className={classes.button}
									aria-label="scroll"
									onClick={handleOpen}
								>
									Elegir Plan
								</button>
							</Grid>
							<Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
								<div className={classes.plansCardsHeaderThird}>
									<h3>BI MENSUAL</h3>
								</div>
								<div className={classes.paragraphInside}>
									<p>8 sesiones por</p>
									<p className={classes.paragraphInsideBolder}>29€</p>
									<p> cada una. Total 192€</p>
								</div>
								<p className={classes.paragraph}>
									1ª Sesión psicólogo online gratis + Sesion gratuita con el especialista guia
								</p>
								<button
									className={classes.button}
									aria-label="scroll"
									onClick={handleOpen}
								>
									Elegir Plan
								</button>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						direction="column"
						spacing={5}
						justify="space-evenly"
						alignItems="center"
						className={classes.textContainer}
					>
						<h2 className={classes.title}>Si es la primera vez que utilizas Eva Minerva</h2>
						<p className={classes.paragraph}>
							En caso de que no quedes 100% satisfecho después de haber probado la primera sesión
							gratuita, te haremos un reembolso del 100 % de tu plan.
						</p>
						<p className={classes.paragraph}>
							Después de la llamada con el especialista guia te asignaremos el psicólogo online más
							adaptado a tus necesidades y tendrás un máximo de 7 días para disfrutar de tu primera sesión
							gratuita.
						</p>
						<p className={classes.paragraph}>
							Tu primera sesión será importante para determinar el motivo de la consulta y clarificar los
							objetivos que se persiguen durante el desarrollo del plan, conocer a tu psicólogo online y
							dar los primeros pasos en tu terapia.
						</p>
						<p className={classes.paragraph}>
							Una vez finalizada esta primera consulta gratuita, y en caso de que desees continuar
							trabajando con tu psicologo online, tu plan elegido se hará activo. El servicio se
							desarrollará a través de video sesiones semanales de 60 minutos.
						</p>
						<p className={classes.paragraph}>
							En el caso de que tu satisfacción no sea la esperada en cualquier momento podrás solicitar
							la cancelación de tu plan cuando, procederemos al reembolso de las sesiones restantes.
						</p>
						<p className={classes.paragraph}>
							Además, todos los planes incluyen la posibilidad de cambio de psicólogo online si es asi
							como tu lo sientes.
						</p>
						<p className={classes.paragraph}>
							Gracias por confiar en Eva Minerva, la red de psicólogos, profesionales de la salud y
							bienestar emocional que más se adapta a ti. Para más información: info@evaminerva.com
						</p>
						<img src={logo} alt="Logo Eva Minerva" className={classes.plansLogo} />
					</Grid>
				</Grid>
			</Grid>
			<UserInformationModal open={openModal} handleOpen={handleOpen} handleClose={handleClose} />
		</Box>
		// <ProfessionalForm />
	);
};

export default ProfessionalPage;
