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
  },
  cardBox: {
    marginTop: '25px'
  }
});

const imgBLockOptions = {
  title: 'Colabora  con Nosotr@s',
  text:
    'Eva Minerva es la red de psicología, bienestar emocional y desarrollo personal más vanguardista en el ámbito de la psicología online. Puedes colaborar con nosotros mediante el siguiente formulario. Nuestro propósito es generar para nuestros colaboradores ingresos adicionales mientras nos ayudan a crear una marca fuerte comprometida con la comunidad.',
  button: 'Únete',
  img: womanSofa
};

const ProfessionalPage = props => {
  const classes = useStyles();
  return (
    <Box mt={2}>
      <Grid container direction="column" className={classes.professional}>
        <Grid container direction="column" spacing={5} className={classes.professionalContainer}>
          <ImageBlock imgBLockOptions={imgBLockOptions} />
          <Grid container className={classes.cardBox} direction="column" alignItems="center" spacing={5}>
            <Grid container justify="space-around" direction="row" spacing={5}>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <h3 className={classes.secondaryTitle}>
                  ¿Cuántos seguidores hacen falta para participar en una campaña?
                </h3>
                <p className={classes.paragraph}>
                  No es necesario un número mínimo de seguidores en redes sociales para colaborar,
                  no obstante, sí es importante que tu comunidad de seguidores tenga cierta
                  sensibilidad o compromiso con el bienestar mental, físico o el cambio social
                  positivo.
                </p>
              </Grid>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <h3 className={classes.secondaryTitle}>¿Qué tipo de colaboraciones proponemos?</h3>
                <p className={classes.paragraph}>
                  Podrás participar en campañas de contenido, de opinión y promocionales. En
                  referencia a las campañas promocionales recibirás un porcentaje directo de las
                  ventas producidas :)
                </p>
              </Grid>
              <Grid item md={3} sm={12} className={classes.professionalCards}>
                <h3 className={classes.secondaryTitle}>
                  Salud Mental accesible, donde y cuando más lo necesiten las personas
                </h3>
                <p className={classes.paragraph}>
                  Nuestro objetivo es facilitar el equilibrio entre una persona y su entorno
                  socio-cultural, mejorando su participación laboral, intelectual, y sus relaciones
                  para alcanzar un bienestar y calidad de vida.
                </p>
              </Grid>
            </Grid>
            <p className={classes.paragraph}>
              Si sientes que esto encaja con tu audiencia también puedes contactarnos a 
              <a href="mailto:info@evaminerva.com">info@evaminerva.com</a>
            </p>
            <p className={classes.paragraph}>¡Muchas Gracias por tiempo!</p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <ProfessionalForm />
  );
};

export default ProfessionalPage;
