import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import { FaFileExcel } from 'react-icons/fa';

const useStyles = makeStyles({
  cookiesBlock: {
    position: 'sticky',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingButton: '15px'
  },
  cookiesBlockBox: {
    backgroundColor: theme.color.principals.white,
    width: '100%',
    borderRadius: '2rem',
    marginBottom: '20px',
    padding: '20px 20px',
    border: '0.5px solid black',
    opacity: '0.8'
  },
  cookiesText: {},
  cookies: {
    height: '20px'
  },
  textCookies: {},
  cookiesBottom: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: theme.color.principals.orange,
    padding: '5px 7px',
    color: theme.color.principals.white,
    width: '150px',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: '1.2rem',
    borderRadius: '0.5rem',
    height: '35px'
  },
  CookiesParagraph: {
    fontSize: '0.8rem',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '0.2rem'
  },
  img: {
    width: '150px',
    position: 'relative',
    top: '-115px'
  },
  switchCookies: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.color.principals.white,
    maxWidth: '95vw',
    padding: '15px',
    borderRadius: '0.5rem'
  },
  configurationButton: {
    backgroundColor: 'none',
    border: 'none'
  },
  '@media (max-width: 700px)': {
    cookiesBlockBox: {
      width: '100%',
      fontSize: '1rem',
      opacity: '0.9',
      padding: '0px 20px 10px 20px'
    },
    CookiesParagraph: {
      fontSize: '0.8rem',
      marginBottom: '1rem'
    },
    img: {
      width: '70px',
      top: '-60px'
    }
  }
});

const handleClick = () => {
  localStorage.setItem('Cookies', true);
  window.location.reload();
};

const CookiesBlock = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box mt={2} className={classes.cookiesBlock}>
      <Grid container className={classes.cookiesBlockBox}>
        <Grid item md={11} sm={8}>
          <Grid item md={12} sm={12} className={classes.textCookies}>
            <p className={classes.CookiesParagraph}>
              Gracias por visitar Eva Minerva. Como la mayor parte de las webs utilizamos cookies
              para mejorar la experiencia del usuario. Si continuas navegando entendemos que adaptes
              los términos y condiciones de uso.{' '}
              {
                <button type="button" className={classes.configurationButton} onClick={handleOpen}>
                  Configurar cookies
                </button>
              }{' '}
              <a href="/cookies">Nuestra politica de cookies</a>
            </p>
          </Grid>
        </Grid>
        <Grid item md={1} sm={4} className={classes.cookiesBottom}>
          <button className={classes.button} onClick={handleClick}>
            Aceptar
          </button>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Grid container className={classes.paper}>
            <Grid item md={9} sm={12} className={classes.switchCookies}>
              <p className={classes.CookiesParagraph}>
                Cookies de terceros para la gestión de pagos
              </p>
              <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
            </Grid>
            <Grid item md={9} sm={12} className={classes.switchCookies}>
              <p className={classes.CookiesParagraph}>Cookies de Analytics</p>
              <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
            </Grid>
            <Grid item md={9} sm={12} className={classes.switchCookies}>
              <p className={classes.CookiesParagraph}>Cookies de Facebook ads</p>
              <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
            </Grid>
            <Grid item md={12} sm={12} className={classes.cookiesBottom}>
              <button className={classes.button} onClick={handleClose}>
                Guardar
              </button>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </Box>
  );
};

export default CookiesBlock;
