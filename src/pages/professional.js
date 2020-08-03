import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import ProfessionalForm from '../components/ProfessionalForm/professional-form';
import womanSofa from '../images/jpg/3778535-01 (1).svg';
import calendar from '../images/jpg/calendario.jpg';
import handMoney from '../images/jpg/manopasta_Mesa de trabajo 1.jpg';
import homeOffice from '../images/jpg/mujer-trabajadesdecasa-01.jpg';


const useStyles = makeStyles({
  professional: {
    padding: '115px 0 50px 0',
  },
  professionalContainer: {
    backgroundColor: 'white',
    padding: '45px',
    borderRadius: '1rem',
  },
  professionalCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.color.principals.darkerPurpleText,
    padding: '20px 15px',
    color: 'white',
    width: '260px',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '0.5rem',
  },
  textTopBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'inherit',
  },
  professionalCardsImages: {
    height: '300px',
  },
  title: {
    fontSize: '2.3rem',
    lineHeight: '1.3',
    color: theme.color.principals.darkerPurpleText,
    margin: '3rem 0 4rem 0',
  },
  secondaryTitle: {
    fontSize: '1.5rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '3rem',
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
  }
})




const ProfessionalPage = props => {
  const classes = useStyles();
  return (
    <Box mt={2}>
    <Grid container direction="column" className={classes.professional}>
      <Grid container direction="column" spacing={5} className={classes.professionalContainer}>
        <Grid container spacing={5} direction="row">
          <Grid className={classes.textTopBox} item sm={12} md={6}>
            <h2 className={classes.title}>Estamos contratando. Únete al equipo de Eva Minerva y comienza a ofrecer psicología online y terapia sin salir de casa </h2>
            <p className={classes.paragraph}>
            Eva Minerva es la  empresa de salud emocional, bienestar y desarrollo humano más vanguardista en el ámbito de la psicología online.
            </p>
            <a className={classes.button} href="/professional-form">
              Enviar candidatura
            </a>
          </Grid>
          <Grid item md={6} sm={12} className={classes.imgBox}>
            <img
              src={womanSofa}
              alt='Woman sitting on a sofa'
            />
          </Grid>
        </Grid>
        <Grid container direction="column" md={12}  alignItems="center" spacing={5}>
          <h2 className={classes.title}>Ventajas de ser psicólogos online en Eva Minerva </h2>
          <Grid container justify="space-around" direction="row" md={12} spacing={5}>
            <Grid item md={3} sm={12} className={classes.professionalCards}>
              <img
                src={calendar}
                alt='Calendar'
                className={classes.professionalCardsImages}
              />
              <h3 className={classes.secondaryTitle}>Horario flexible</h3>
              <p className={classes.paragraph}>
              Programa con antelación o selecciona algún bloque disponible, adaptando tus horarios a tus necesidades.
              </p>
            </Grid>
            <Grid item md={3} sm={12} className={classes.professionalCards}>
              <img
                src={homeOffice}
                alt='Woman working from home'
                className={classes.professionalCardsImages}
              />
              <h3 className={classes.secondaryTitle}>Desarrollate en terapia online además de trabajar desde casa</h3>
              <p className={classes.paragraph}>
              Recibirás apoyo para mejorar tu posicionamiento y reconocimiento online. Además recibirás formación sobre terapia online.
              </p>
            </Grid>
            <Grid item md={3} sm={12} className={classes.professionalCards}>
              <img
                src={handMoney}
                alt='Money'
                className={classes.professionalCardsImages}
              />
              <h3 className={classes.secondaryTitle}>Ingresos adicionales </h3>
              <p className={classes.paragraph}>
              Consigue ingresos, reduce los gastos de la práctica privada y llega a nuevos pacientes.
              </p>
            </Grid>
          </Grid>
          <a href="/professional-form" className={classes.button}>
            Enviar candidatura
          </a>
          </Grid>
        </Grid>
      </Grid>
    </Box>
      // <ProfessionalForm />
  );
};

export default ProfessionalPage;