import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import cookies from '../../images/jpg/Las galletas.svg';

const useStyles = makeStyles({
  cookiesBlock: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingButton: '15px'
  },
  cookiesBlockBox: {
    backgroundColor: theme.color.principals.darkerPurpleText,
    width: '60%',
    borderRadius: '2rem',
    marginBottom: '20px',
    padding: '40px 40px'
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
    padding: '20px 15px',
    color: 'white',
    width: '260px',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '0.5rem'
  },
  paragraph: {
    fontSize: '1.5rem',
    color: theme.color.principals.white,
    marginBottom: '3rem'
  },
  img: {
    width: '75%',
    position: 'relative',
    top: '-144px'
  }
});

const handleClick = () => {
  localStorage.setItem('Cookies', true);
  window.location.reload();
};

const CookiesBlock = props => {
  const classes = useStyles();
  return (
    <Box mt={2} className={classes.cookiesBlock}>
      <Grid container className={classes.cookiesBlockBox}>
        <Grid item md={3} sm={12} className={classes.cookies}>
          <img className={classes.img} src={cookies} alt="Cookies" />
        </Grid>
        <Grid item md={9} sm={12} className={classes.textCookies}>
          <p className={classes.paragraph}>
            Gracias por visitar Eva Minerva. Como la mayor parte de las webs utilizamos cookies para
            mejorar la experiencia del usuario. Si continuas navegando entendemos que adaptes los
            términos y condiciones de uso
          </p>
        </Grid>
        <Grid item md={12} sm={12} className={classes.cookiesBottom}>
          <button className={classes.button} onClick={handleClick}>
            Entendido
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CookiesBlock;
