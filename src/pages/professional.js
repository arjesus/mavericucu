import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import ImageBlock from '../components/Image-block/imagineBLock.component';
import ProfessionalForm from '../components/ProfessionalForm/professional-form';
import womanSofa from '../images/jpg/3778535-01 (1).svg';
import calendar from '../images/jpg/calendario.jpg';
import handMoney from '../images/jpg/manopasta_Mesa de trabajo 1.jpg';
import homeOffice from '../images/jpg/mujer-trabajadesdecasa-01.png';

const useStyles = makeStyles({
  professional: {
    padding: '70px 15px 15px 15px'
  },
  professionalContainer: {
    backgroundColor: 'white',
    padding: '45px 90px',
    borderRadius: '1rem'
  },
  professionalCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    width: 'fit-content',
    padding: '19px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600'
  },
  textTopBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'inherit'
  },
  professionalCardsImages: {
    width: '300px',
    height: '300px',
    marginBottom: '25px'
  },
  '@media (max-width: 600px)': {
    professional: {
      padding: '0px 15px 15px 15px'
    },
    professionalContainer: {
      padding: '45px 35px'
    }
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
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '3rem',
    minHeight: '83px'
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const imgBLockOptions = {
  title:
    'Estamos contratando. Únete al equipo de Eva Minerva y comienza a ofrecer psicología online y terapia sin salir de casa',
  text:
    'Eva Minerva es la  empresa de salud emocional, bienestar y desarrollo humano más vanguardista en el ámbito de la psicología online.',
  button: 'Enviar candidatura',
  img: womanSofa
};

const ProfessionalPage = props => {
  const classes = useStyles();
  return (
    <Box mt={2}>
      <Grid container direction="column" className={classes.professional}>
        <Grid container direction="column" spacing={5} className={classes.professionalContainer}>
          <ImageBlock imgBLockOptions={imgBLockOptions} />
          <Grid container direction="column" alignItems="center" spacing={5}>
            <h2 className={classes.title}>Ventajas de ser psicólogos online en Eva Minerva </h2>
            <Grid container justify="space-around" direction="row" spacing={5}>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <img src={calendar} alt="Calendar" className={classes.professionalCardsImages} loading="lazy" height="" width=""/>
                <h3 className={classes.secondaryTitle}>Horario flexible</h3>
                <p className={classes.paragraph}>
                  Programa con antelación o selecciona algún bloque disponible, adaptando tus
                  horarios a tus necesidades.
                </p>
              </Grid>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <img
                  src={homeOffice}
                  alt="Woman working from home"
                  className={classes.professionalCardsImages}
                  loading="lazy" height="" width=""
                />
                <h3 className={classes.secondaryTitle}>Trabajar desde casa</h3>
                <p className={classes.paragraph}>
                  Recibirás apoyo para mejorar tu posicionamiento y reconocimiento online. Recibirás
                  formación sobre terapia online.
                </p>
              </Grid>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <img src={handMoney} alt="Money" className={classes.professionalCardsImages} loading="lazy" height="" width=""/>
                <h3 className={classes.secondaryTitle}>Ingresos adicionales </h3>
                <p className={classes.paragraph}>
                  Consigue ingresos, reduce los gastos de la práctica privada y llega a nuevos
                  pacientes.
                </p>
              </Grid>
            </Grid>
            <a
              href="https://kf2sm3o3mb2.typeform.com/to/ux4iyPRY"
              target="_blank"
              className={classes.button}
            >
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
