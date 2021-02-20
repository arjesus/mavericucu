import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import chatImg from '../../images/jpg/conversaicon-digital-01.svg';
import Checkout from '../Checkout/checkout';
import theme from '../../theme/theme.yaml';
import DatePickerMaterialComponent from '../dynamic-form/date-picker/datepicker.material';

const initialFormState = {
  name: '',
  surname: '',
  phone: null,
  email: '',
  date: null
};

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid white',
    borderRadius: '0.5rem',
    width: '100vw',
    '& .MuiGrid-container': {
      width: '50%',
      backgroundColor: theme.color.principals.white,
      zIndex: 9999999,
      padding: '15px 40px',
      borderRadius: '0.5rem'
    },
    '@media (max-width: 600px)': {
      '& .MuiGrid-container': {
        width: '90vw',
        padding: '15px 5px',
      }
    }
  },
  containerModalImg: {},
  paper: {
    border: '2px solid #000'
  },
  title: {
    fontSize: '2rem',
    lineHeight: '1',
    color: theme.color.principals.darkerPurpleText,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: '1.3rem',
    color: theme.color.principals.blackText,
    textAlign: 'center'
  },
  paragraphFooter: {
    fontSize: '1.2rem',
    color: theme.color.principals.darkerPurpleText,
    textAlign: 'justify'
  },
  goBackButton: {
    color: theme.color.principals.darkerPurpleText,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '1.2rem',
    border: 'none',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  modalImg: {
    width: '250px',
    height: '130px'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  priceContainer: {
    margin: '10px 0',
    backgroundColor: theme.color.principals.lightYellow,
    borderRadius: '0.5rem'
  },
  noPadding: {
    padding: '0'
  },
  '@media (max-width: 600px)': {

  }
});

const UserInformationModal = ({ handleClose, open, handleOpen, chosenPlan }) => {
  const [formFields, setformFields] = useState(initialFormState);
  const isEmailValid = email => {
    const numberRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return numberRegex.test(String(email).toLowerCase());
  };
  const validEmail = formFields.email === '' || isEmailValid(formFields.email);
  const classes = useStyles();

  const handleInput = (field, value) => {
    setformFields(prevFormFields => ({
      ...prevFormFields,
      [field]: value
    }));
  };

  const handleChangeInputEvent = e => {
    handleInput(e.target.name, e.target.value);
  };

  const handleChangeInputDate = date => {
    handleInput('date', date);
  };

  return (
    <div>
      <Modal maxWidth="sm" disableScrollLock="false" fullWidth className={classes.modal} open={open} onClose={handleClose}>
        <Grid
          container
          className={classes.containerModalImg}
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid item md={12} className={classes.center}>
            <img className={classes.modalImg} src={chatImg} alt="Dos personas hablando" />
          </Grid>
          <Grid item md={12} className={classes.center}>
            <h2 className={classes.title}>¡Perfecto, has elegido el Plan Semanal!</h2>
          </Grid>
          <Grid item md={10} className={classes.center}>
            <p className={classes.paragraph}>
              Solo necesitamos la siguiente información y que confirmes el pago para que nuestros
              especialistas guías te contacten
            </p>
          </Grid>
          <Grid item md={6}>
            <TextField
              name="name"
              id="standard-basic"
              label="Standard"
              fullWidth
              label={'Nombre'}
              value={formFields.name}
              onChange={handleChangeInputEvent}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="surname"
              id="standard-basic"
              label="Standard"
              fullWidth
              label={'Apellidos'}
              value={formFields.apellidos}
              onChange={handleChangeInputEvent}
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
              label="Email"
              value={formFields.email}
              onChange={handleChangeInputEvent}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              name="phone"
              id="standard-basic"
              label="Telefono"
              fullWidth
              value={formFields.phone}
              onChange={handleChangeInputEvent}
            />
          </Grid>
          <Grid item sm={12} md={12} className={classes.center}>
            <DatePickerMaterialComponent value={formFields.date} onChange={handleChangeInputDate} />
          </Grid>
          <Grid item md={6} className={(classes.center, classes.priceContainer)}>
            <Grid item md={12}>
              <p>{chosenPlan.name}</p>
            </Grid>
            <Grid item md={12}>
              <p>{chosenPlan.cost}</p>
            </Grid>
          </Grid>
          <Grid item md={12} className={classes.center}>
            <Checkout id={chosenPlan.id} answer={formFields} handleClose={handleClose} />
          </Grid>
          <Grid item md={12} className={classes.center}>
            <button className={classes.goBackButton} aria-label="scroll" onClick={handleClose}>
              Ver otros planes
            </button>
          </Grid>
          <Grid item md={10}>
            <p className={classes.paragraphFooter}>
              En caso de que no quedes 100% satisfecho después de haber probado la primera sesión
              gratuita, te haremos un reembolso del 100 % de tu plan. En caso de cancelación durante
              el desarrollo del plan se te hará el reembolso de las sesiones pendientes.
            </p>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default UserInformationModal;
