import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import { getImg } from '../utils/helpers';

const useStyles = makeStyles({
  professional: {
    padding: '70px 20px 35px 20px'
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
    padding: '20px 15px',
    color: 'white',
    width: '260px',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '0.5rem'
  },
  textTopBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'inherit'
  },
  professionalCardsImages: {
    height: '300px'
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
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      maxWidth: '500px'
    }
  },
  title: {
    fontSize: '2.3rem',
    lineHeight: '1.3',
    color: theme.color.principals.darkerPurpleText,
    margin: '3rem 0 4rem 0',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: theme.color.principals.darkerPurpleText,
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
  },
  button: {
    backgroundColor: theme.color.principals.darkerPurpleText,
    padding: '3px 10px',
    color: 'white',
    width: '180px',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '0.5rem'
  },
  plansCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '0.5rem',
    textAlign: 'center',
    padding: '15px 15px',
    marginBottom: '20px',
    border: `1px solid ${theme.color.principals.darkerPurpleText}`,
    width: '300px'
  },
  plansCardsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  '@media (max-width: 600px)': {
    professional: {
      padding: '5px 20px 35px 20px'
    },
    imgBox: {
      '& img': {
        width: '90%'
      }
    },
    textTopBox: {
      alignItems: 'center'
    },
    title: {
      margin: '0'
    },
    button: {
      padding: '12px 10px',
      width: '135px',
      fontSize: '1.2rem',
      borderRadius: '0.3rem'
    },
    plansCards: {
      '& h3': {
        fontSize: '1.5rem'
      }
    },
    plansBox: {
      '& h2': {
        marginBottom: '20px'
      }
    },
    professionalContainer: {
      padding: '45px 35px'
    },
    plansCardsContainer: {
      padding: '0 5px'
    }
  }
});

const specialities = [
  {
    title: 'Depresion',
    description: '',
    link: '/depresion'
  },
  {
    title: 'Autoestima',
    description: '',
    link: '/autoestima'
  },
  {
    title: 'Ansiedad',
    description: '',
    link: '/ansiedad'
  },
  {
    title: 'Terapia de pareja',
    description: '',
    link: '/terapia-de-pareja'
  },
  {
    title: 'Terapia sexual',
    description: '',
    link: '/sexualidad'
  },
  {
    title: 'Fobias',
    description: '',
    link: '/fobias'
  },
  {
    title: 'Coaching deportivo',
    description: '',
    link: '/coaching-deportivo'
  },
  {
    title: 'Coaching',
    description: '',
    link: '/coaching'
  }
];

const ProfessionalPage = props => {
  const classes = useStyles();
  return (
    <Box mt={2}>
      <Grid container direction="column" className={classes.professional}>
        <Grid container direction="column" spacing={5} className={classes.professionalContainer}>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={5}
            className={classes.plansBox}
          >
            <h2 className={classes.title}>Áreas de especialidad de Eva Minerva</h2>
            <Grid container spacing={5} justify="space-around">
              {specialities.map((speciality, i) => {
                return (
                  <Grid key={i} item md={3} sm={6} xs={6} className={classes.plansCardsContainer}>
                    <div className={classes.plansCards}>
                      <h3>{speciality.title}</h3>
                      <p className={classes.paragraphInside}>{speciality.description}</p>
                      <Grid item md={6} sm={12} className={classes.imgBox}>
                        <img
                          className={classes.img}
                          src={getImg(speciality.title)}
                          alt={speciality.description}
                          loading="lazy"
                          height="120"
                          width="135"
                        />
                      </Grid>
                      <a className={classes.button} href={speciality.link}>
                        Saber mas
                      </a>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container spacing={5} direction="row">
            <Grid item md={12}>
              <h2 className={classes.title}>Contactanos y comienza a sentirte mejor</h2>
            </Grid>
            <Grid className={classes.textTopBox} item sm={12} md={6}>
              <p className={classes.paragraph}>
                Podríamos comentar muchas más cosas sobre nuestros profesionales y los buenos
                resultados de la terapia online pero a la hora de la verdad lo que cuenta es tu
                experiencia.
              </p>
              <p className={classes.paragraph}>
                Mediante nuestro breve formulario de contacto podrás elegir el momento que mejor te
                venga a ti para que nuestro psicólogo guia te contacte y agendar tu primera sesión
                gratuita con un psicólogo.
              </p>
              <a className={classes.button} href="/professional-form">
                Empezar
              </a>
            </Grid>
            <Grid item md={6} sm={12} className={classes.imgBox}>
              <img
                className={classes.img}
                src={getImg('Depresion')}
                alt="Woman sitting on a sofa"
                loading="lazy"
                height="320"
                width="500"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <ProfessionalForm />
  );
};

export default ProfessionalPage;
