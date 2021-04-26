import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import logo from '../images/jpg/logo-text.png';

const useStyles = makeStyles({
  thankyouPage: {
    padding: '55px 0 10px 0',
    color: theme.color.principals.darkerPurpleText,
    maxWidth: '1000px',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      padding: '0px 0 10px 0'
    }
  },
  thankyouContainer: {
    backgroundColor: 'white',
    padding: '25px 40px',
    borderRadius: '0.5rem',
    minHeight: '550px',
    '& h2': {
      margin: '40px 0 0 0',
      textAlign: 'center'
    },
    '& p': {
      margin: '25px 0',
      textAlign: 'center'
    }
  },
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    width: '160px',
    padding: '19px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '1rem',
    cursor: 'pointer'
  },
  logo: {
    width: '80%',
    maxWidth: '200px'
  },
  email: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px'
  },
  back: {
    textDecoration: 'underLine'
  }
});

const ThankYouPage = props => {
  const classes = useStyles();
  useEffect(() => {
    window.gtag('event', 'conversion', {
      send_to: 'AW-382469846/HdYZCK7b9osCENaNsLYB',
      value: 60.0,
      currency: 'EUR',
      transaction_id: 'ismael-test1'
    });
  }, []);
  return (
    <Box mt={2}>
      <Grid container direction="column" className={classes.thankyouPage}>
        <Grid container direction="column" className={classes.thankyouContainer}>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={5}
            className={classes.plansBox}
          >
            <img className={classes.logo} src={logo} alt={logo} />
            <h2 className={classes.title}>¡Gracias por confiar en Eva Minerva!</h2>
            <Grid item md={12} className={classes.titleSubText}>
              <p>
                En breves recibirás un email con el que podrás agendar tu cita con el especialista
                guia, esto nos permitirá encontrar personalmente al psicólogo online que más se
                adapta a tí.
              </p>
              <p>
                En caso de que no encuentres el email en la bandeja de entrada por favor revisa la
                carpetas de social, promociones o spam.
              </p>
              <p>Si tienes cualquier consulta por favor contactanos</p>
              <Grid className={classes.email} item md={12}>
                <a href="mailto:info@evaminerva.com">info@evaminerva.com</a>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <a href="/quienes-somos" className={classes.button}>
                Descubre Nuestra Historia
              </a>
            </Grid>
            <Grid item md={12}>
              <a href="/" className={classes.back}>
                {' '}
                Volver a la página principal"
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThankYouPage;
