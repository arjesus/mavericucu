import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import ProfessionalForm from '../components/ProfessionalForm/professional-form';
import logo from '../images/jpg/logo-text.png';
import Checkout from '../components/Checkout/checkout';

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
    margin: '3rem 0 4rem 0'
  },
  secondaryTitle: {
    fontSize: '1.5rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: theme.color.principals.blackText,
    marginBottom: '3rem'
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
  }
});

const ProfessionalPage = props => {
  const classes = useStyles();
  return (
    <Box mt={2}>
      <Grid container direction="column" className={classes.plans}>
        <Grid container direction="column" className={classes.plansContainer}>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={5}
            className={classes.plansBox}
          >
            <h2 className={classes.title}>Elige el plan que más se adapte a ti</h2>
            <Grid container justify="space-around" direction="row" spacing={5}>
              <Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
                <div className={classes.plansCardsHeaderFirst}>
                  <h3>SEMANAL</h3>
                </div>
                <div className={classes.paragraphInside}>
                  <p>1 sesión por</p>
                  <p className={classes.paragraphInsideBolder}>35€</p>
                  <p></p>
                </div>
                <p className={classes.paragraph}>1 sesión de 60 minutos gratis</p>
                <Checkout />
              </Grid>
              <Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
                <div className={classes.plansCardsHeaderSecond}>
                  <h3>MENSUAL</h3>
                </div>
                <div className={classes.paragraphInside}>
                  <p>4 sesiones por</p>
                  <p className={classes.paragraphInsideBolder}>29€</p>
                  <p>cada una</p>
                </div>
                <p className={classes.paragraph}>1 sesión de 60 minutos gratis + psicologo guia</p>
                <Checkout />
              </Grid>
              <Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
                <div className={classes.plansCardsHeaderThird}>
                  <h3>BI MENSUAL</h3>
                </div>
                <div className={classes.paragraphInside}>
                  <p>8 sesiones por</p>
                  <p className={classes.paragraphInsideBolder}>29€</p>
                  <p>cada una</p>
                </div>
                <p className={classes.paragraph}>1 sesión de 60 minutos gratis + psicologo guia</p>
                <Checkout />
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
              Después de la llamada con el psicólogo guia te asignaremos el especialista más
              adaptado a tus necesidades y tendrás un máximo de 7 días para disfrutar de tu primera
              sesión.
            </p>
            <p className={classes.paragraph}>
              Tu primera sesión será importante para determinar el motivo de la consulta y
              clarificar los objetivos que se persiguen durante el desarrollo del plan y conocer a
              tu psicologo.
            </p>
            <p className={classes.paragraph}>
              Una vez finalizada esta primera consulta gratuita y en caso de que desees continuar
              trabajando con tu psicologo tu plan elegido se hará activo. El servicio se
              desarrollará a través de video sesiones semanales de 60 minutos.
            </p>
            <p className={classes.paragraph}>
              En el caso de que tu satisfacción no sea la esperada podrás solicitar la cancelación
              de tu plan cuando quieras, procederemos al reembolso de las sesiones restantes y a la
              revisión de las desarrolladas en caso de que lo consideres oportuno.
            </p>
            <p className={classes.paragraph}>
              Además, todos los planes incluyen la posibilidad de cambio de profesional si no estás
              satisfecho.
            </p>
            <p className={classes.paragraph}>
              Gracias por confiar en Eva Minerva, la red de psicólogos y profesionales de la salud y
              bienestar emocional que más se adapta a ti.
            </p>
            <img src={logo} alt="Logo Eva Minerva" className={classes.plansLogo} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <ProfessionalForm />
  );
};

export default ProfessionalPage;
