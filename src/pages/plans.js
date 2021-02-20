import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../theme/theme.yaml';
import ProfessionalForm from '../components/ProfessionalForm/professional-form';
import logo from '../images/jpg/logo-text.png';
import Checkout from '../components/Checkout/checkout';
import UserInformationModal from '../components/create-user-modal/create-user-modal.componente';

const plansDefinition = [
  {
    id: 0,
    name: 'Plan semanal',
    cost: 'Una session por 35€'
  },
  {
    id: 1,
    name: 'Plan mensual',
    cost: '4 sesiones por 29€ cada una. Total 116€'
  },
  {
    id: 2,
    name: 'Plan bimensual',
    cost: '8 sesiones por 24€ cada una. Total 192€'
  }
];

const useStyles = makeStyles({
  plans: {
    padding: '55px 0 10px 0'
  },
  plansContainer: {
    backgroundColor: 'white',
    padding: '25px 40px',
    borderRadius: '0.5rem'
  },
  '@media (max-width: 600px)': {
    plans: {
      padding: '0px'
    },
    plansContainer: {
      padding: '25px 40px'
    }
  },
  plansCards: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 25px',
    justifyContent: 'space-around',
    border: `2.5px solid ${theme.color.principals.lightPurple}`,
    borderRadius: '0.5rem',
    '@media (max-width: 600px)': {
      marginBottom: '35px'
    }
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
    borderRadius: '0.5rem',
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
    borderRadius: '0.5rem',
    marginBottom: '1rem',
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
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    marginTop: '-15px'
  },
  textContainer: {
    padding: '20px 10%',
    '@media (max-width: 600px)': {
      padding: '0'
    }
  },
  plansLogo: {
    width: '300px'
  },
  title: {
    fontSize: '2.3rem',
    lineHeight: '1.3',
    color: theme.color.principals.darkerPurpleText,
    margin: '2rem 0 1rem 0',
    textAlign: 'center'
  },
  secondaryTitle: {
    fontSize: '1.5rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem',
    lineHeight: '2',
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
    color: theme.color.principals.darkerPurpleText,
    '& p': {
      marginBottom: '0.5rem'
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
    marginBottom: '1rem'
  }
});

const ProfessionalPage = props => {
  const [openModal, setOpenModal] = useState(false);
  const [chosenPlan, setChosenPlan] = useState({});

  const handleOpen = plan => {
    setChosenPlan(plansDefinition[plan]);
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
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={5}
            className={classes.plansBox}
          >
            <h2 className={classes.title}>
              Elige tu plan y conoce a tu psicólogo online hoy mismo
            </h2>
            <Grid item md={12} className={classes.titleSubText}>
              <p>
                Para disfrutar de la primera sesión gratuita con tu psicólogo primero tendrás que
                elegir uno de nuestros planes.
              </p>
              <p>
                Todos los planes incluyen <strong>dos sesiones gratuitas:</strong> Una sesión con el
                especialista guia y la primera sesión de la terapia con tu psicologo.
              </p>
              <p>
                El objetivo del especialista guia es el de conocerte y entender mejor para así poder
                encontrar el psicólogo más adaptado a ti.
              </p>
              <p>La segunda sesión gratuita será con tu psicólogo terapeuta. </p>
              <p>
                En el caso de que después de la primera sesión con tu psicólogo terapetura, no estas
                100% conforme, te haremos un <strong>reembolso del 100% de tu plan.</strong>
              </p>
            </Grid>
            <Grid container justify="space-around" direction="row">
              <Grid item md={3} sm={12} xs={12} className={classes.plansCards}>
                <div className={classes.plansCardsHeaderFirst}>
                  <h3>SEMANAL</h3>
                </div>
                <div className={classes.paragraphInside}>
                  <p>1 sesión por</p>
                  <p className={classes.paragraphInsideBolder}>XX€</p>
                  <p />
                </div>
                <p className={classes.paragraph}>
                  Incluye primera sesión con tu psicólogo gratis + la sesión gratuita con el
                  especialista guia{' '}
                </p>
                <button
                  className={classes.button}
                  aria-label="scroll"
                  onClick={() => handleOpen(0)}
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
                  <p className={classes.paragraphInsideBolder}>XX€</p>
                  <p>cada una. Total XXX€</p>
                </div>
                <p className={classes.paragraph}>
                  Incluye primera sesión con tu psicólogo gratis + la sesión gratuita con el
                  especialista guia{' '}
                </p>
                <button
                  className={classes.button}
                  aria-label="scroll"
                  onClick={() => handleOpen(1)}
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
                  <p className={classes.paragraphInsideBolder}>XX€</p>
                  <p> cada una. Total XXX€</p>
                </div>
                <p className={classes.paragraph}>
                  Incluye primera sesión con tu psicólogo gratis + la sesión gratuita con el
                  especialista guia{' '}
                </p>
                <button
                  className={classes.button}
                  aria-label="scroll"
                  onClick={() => handleOpen(2)}
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
            <p className={classes.paragraph}>
              En caso de que no quedes 100% satisfecho después de haber probado la primera sesión
              gratuita te haremos un reembolso del 100 % de tu plan.
            </p>
            <p className={classes.paragraph}>
              Todos los planes incluyen la posibilidad de cambio de psicólogo online si es asi como
              tu lo sientes.
            </p>
            <p className={classes.paragraph}>
              Tu primera sesión con el psicólogo será importante para determinar el motivo de la
              consulta y clarificar los objetivos que se persiguen durante el desarrollo del plan,
              así como para conocer a tu psicólogo online y dar los primeros pasos en tu terapia.
            </p>
            <p className={classes.paragraph}>
              Una vez finalizada esta primera consulta gratuita, y en caso de que desees continuar
              trabajando con tu psicologo online, tu plan elegido se hará activo. El servicio se
              desarrollará a través de video sesiones semanales de 45 a 60 minutos. Si tu prefieres
              también puede ser mediante llamadas telefónicas
            </p>
            <p className={classes.paragraph}>
              En el caso de que tu satisfacción no sea la esperada en cualquier momento podrás
              solicitar la cancelación de tu plan, después de ello se procederá al reembolso de las
              sesiones restantes.
            </p>
            <p className={classes.paragraph}>Para más información: info@evaminerva.com</p>
            <img src={logo} alt="Logo Eva Minerva" className={classes.plansLogo} />
          </Grid>
        </Grid>
      </Grid>
      <UserInformationModal
        chosenPlan={chosenPlan}
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
    // <ProfessionalForm />
  );
};

export default ProfessionalPage;
