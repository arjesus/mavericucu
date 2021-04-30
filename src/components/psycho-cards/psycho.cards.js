import React from 'react';
import theme from '../../theme/theme.yaml';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { setPsychologist, setTitlePsycoCards } from '../../utils/helpers';

const useStyles = makeStyles({
  cardContainer: {
    padding: '20px 20px',
    color: theme.color.principals.darkerPurpleText,
    borderRadius: '0.5rem',
    boxShadow:
      '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)'
  },
  psychoImg: {
    width: '120px',
    borderRadius: '50%'
  },
  psychoTitle: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center'
  },
  psychoText: {
    fontSize: '0.9rem'
  },
  psychoTextSpetialities: {
    fontSize: '0.9rem',
    marginBottom: '0.4rem'
  },
  psychoTitlePrincipal: {
    margin: '25px 0',
    fontSize: '1.3rem',
    color: theme.color.principals.darkPurple,
    textAlign: 'center',
    marginBottom: '60px'
  },
  bold: {
    marginTop: '0.4rem',
    fontWeight: '700',
    fontSize: '0.9rem'
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
  },
  psychoContainer: {

  },
  psychoText: {
    fontSize: '1rem',
    color: theme.color.principals.darkPurple,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  '@media (max-width: 600px)': {
    cardContainer: {
      marginBottom: '30px',
      width: '100%',
      margin: '0 auto',
      boxShadow:
        '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 7px 13px rgba(0, 0, 0, 0.12)'
    }
  }
});

const PsychoCards = props => {
  const classes = useStyles();
  const psychologists = setPsychologist(props.category ? props.category : 'Depresion');
  const texts = setTitlePsycoCards(props.category ? props.category : 'Depresion')[0];
  const cardToRender = [];
  if (psychologists.length) {
    const numberOfCards = psychologists.length >= 2 ? 2 : psychologists.length;
    for (let i = 0; i <= numberOfCards; i += 1) {
      cardToRender.push(
        <Grid key={i} item md={3} sm={12}>
          <Grid container spacing={2} className={classes.cardContainer}>
            <Grid item sm={6}>
              <img className={classes.psychoImg} src={psychologists[i] && psychologists[i].img} alt="" loading="lazy" height="" width=""/>
            </Grid>
            <Grid item sm={6}>
              <Grid item sm={12} className={classes.psychoTitle}>
                <p>{psychologists[i] && psychologists[i].name}</p>
              </Grid>
              <Grid item sm={12}>
                <p className={classes.bold}>Especialidades:</p>
                <p className={classes.psychoTextSpetialities}>
                  {psychologists[i] && psychologists[i].spectiality}
                </p>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <p className={classes.psychoText}>{psychologists[i] && psychologists[i].text}</p>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <Box mt={2}>
      <Grid
        className={classes.psychoContainer}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item sm={12} className={classes.psychoTitlePrincipal}>
          <h2>{texts.title}</h2>
        </Grid>
        {cardToRender}
        <Grid item sm={12} className={classes.buttonContainer}>
          <a className={classes.button} href="/plans">
            Pedir primera session gratuita
          </a>
        </Grid>
        <Grid item sm={12} className={classes.psychoTitlePrincipal}>
          <h2>{texts.subTitle}</h2>
        </Grid>
        <Grid item sm={12} className={classes.psychoText}>
          <p>{texts.text}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PsychoCards;
