import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { getImg } from '../../utils/helpers';
import theme from '../../theme/theme.yaml';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    marginBottom: '20px'
  },
  button: {
    backgroundColor: theme.color.principals.darkPurple,
    width: 'fit-content',
    padding: '19px 23px',
    color: theme.color.principals.white,
    borderRadius: '0.5rem',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    minWidth: '250px'
  },
  textTopBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'inherit'
  },
  title: {
    fontSize: '2.3rem',
    lineHeight: '1.3',
    color: theme.color.principals.darkerPurpleText,
    margin: '0rem 0 2rem 0'
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
    width: '100%',
    height: 'auto'
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    maxWidth: '500px',
    height: 'auto'
  },
  '@media (max-width: 600px)': {
    container: {
      paddingBottom: '20px'
    },
    title: {
      margin: '1rem 0 2rem 0'
    },
    button: {
      margin: '0 auto'
    },
    imgBox: {
      width: '200px',
      height: 'auto',
      margin: '0 auto'
    },
    img: {
      width: 'inherit'
    }
  }
});

const ImageBlock = props => {
  const classes = useStyles();
  const { imgBLockOptions } = props;

  const isProfessional = imgBLockOption => {
    if (imgBLockOption.category === 'quienes somos') return '/';
    if (imgBLockOption.button.includes('Únete')) return 'mailto:info@evaminerva.com';
    return '/plans';
  };
  const isProfessionalTarget = text => {
    if (text.includes('Más información') || text.includes('Únete')) return '';
    return '_blank';
  };

  return (
    <Box mt={2}>
      <Grid container spacing={5} direction="row" className={classes.container}>
        <Grid className={classes.textTopBox} item sm={12} md={6}>
          <h2 className={classes.title}>{imgBLockOptions.title}</h2>
          <p className={classes.paragraph}>{imgBLockOptions.text}</p>
          <a
            className={classes.button}
            target={isProfessionalTarget(imgBLockOptions.button)}
            href={isProfessional(imgBLockOptions)}
          >
            {imgBLockOptions.button}
          </a>
        </Grid>
        <Grid item md={6} sm={12} className={classes.imgBox}>
          {imgBLockOptions.img ? (
            <img
              className={classes.img}
              src={imgBLockOptions.img}
              alt={imgBLockOptions.category}
              loading="lazy"
              height="470"
              width="740"
            />
          ) : (
            <img
              className={classes.imgBox}
              src={getImg(imgBLockOptions.category)}
              alt="Woman sitting on a sofa"
              loading="lazy"
              height="470"
              width="740"
            />
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
