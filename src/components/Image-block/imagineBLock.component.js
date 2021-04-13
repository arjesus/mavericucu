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
    fontWeight: '600'
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
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    maxWidth: '500px'
  },
  '@media (max-width: 600px)': {
    imgBox: {
      width: 'inherit'
    },
    img: {
      width: 'inherit'
    }
  }
});

const ImageBlock = props => {
  const classes = useStyles();
  const { imgBLockOptions } = props;

  const isProfessional = text => {
    if (text.includes('Más información sobre Eva Minerva')) return '/plans';
    return 'https://kf2sm3o3mb2.typeform.com/to/ux4iyPRY';
  };
  const isProfessionalTarget = text => {
    if (text.includes('Más información sobre Eva Minerva')) return '';
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
            href={isProfessional(imgBLockOptions.button)}
          >
            {imgBLockOptions.button}
          </a>
        </Grid>
        <Grid item md={6} sm={12} className={classes.imgBox}>
          {imgBLockOptions.img.childImageSharp ? (
            <img
              className={classes.img}
              src={getImg(imgBLockOptions.category)}
              alt={imgBLockOptions.category}
            />
          ) : (
            <img
              className={classes.imgBox}
              src={imgBLockOptions.img}
              alt="Woman sitting on a sofa"
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
