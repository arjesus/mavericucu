import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme/theme.yaml';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    marginBottom: '20px'
  },
  button: {
    backgroundColor: theme.color.principals.darkerPurpleText,
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
    marginBottom: '3rem'
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
});

const ImageBlock = props => {
  const classes = useStyles();
  const { imgBLockOptions } = props;
  console.log(imgBLockOptions);

  return (
    <Box mt={2}>
      <Grid container spacing={5} direction="row" className={classes.container}>
        <Grid className={classes.textTopBox} item sm={12} md={6}>
          <h2 className={classes.title}>{imgBLockOptions.title}</h2>
          <p className={classes.paragraph}>{imgBLockOptions.text}</p>
          <a className={classes.button} href="/professional-form">
            Pedir primera sesión gratuita
          </a>
        </Grid>
        <Grid item md={6} sm={12} className={classes.imgBox}>
          {imgBLockOptions.img.childImageSharp ? (
            <img
              src={imgBLockOptions.img.childImageSharp.resize.src}
              alt="Woman sitting on a sofa"
            />
          ) : (
            <img src={imgBLockOptions.img} alt="Woman sitting on a sofa" />
          )}
        </Grid>
        <Grid item md={6} sm={12} className={classes.imgBox}>
          {imgBLockOptions.img.childImageSharp ? (
            <img
              src={imgBLockOptions.img.childImageSharp.resize.src}
              alt="Woman sitting on a sofa"
            />
          ) : (
            <img src={imgBLockOptions.img} alt="Woman sitting on a sofa" />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

ImageBlock.propTypes = {
  imgBLockOptions: PropTypes.object.isRequired
};

export default ImageBlock;
