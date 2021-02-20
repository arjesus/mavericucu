import React from 'react';
import theme from '../../theme/theme.yaml';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { setPsychologist } from '../../utils/helpers';

const useStyles = makeStyles({
  cardContainer: {
    padding: '20px 20px',
    color:theme.color.principals.darkerPurpleText,
    boxShadow:'0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',
  },
  psychoImg: {
    width: '120px',
    borderRadius: '50%'
  },
  psychoTitle: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  },
  psychoText: {
    fontSize: '0.9rem'
  },
  psychoTextSpetialities: {
    fontSize: '0.9rem',
    marginBottom: '0.4rem'
  },
  psychoTitlePrincipal: {
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
  '@media (max-width: 600px)': {
    cardContainer: {
      marginBottom: '30px',
      width: '100%',
      margin: '0 auto',
      boxShadow:'0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 7px 13px rgba(0, 0, 0, 0.12)',
    }
  }
});

const PsychoCards = props => {
  const classes = useStyles();
  const psychologists = setPsychologist(props.category ? props.category : 'Depresion');
  const cardToRender = [];
  for (let i = 0; i <= 2; i += 1) {
    cardToRender.push(
      <Grid item md={3} sm={12}>
        <Grid container spacing={5} className={classes.cardContainer}>
          <Grid sm={6}>
            <img className={classes.psychoImg} src={psychologists[i].img} />
          </Grid>
          <Grid sm={6} className={classes.psychoTitle}>
            <p>{psychologists[i].name}</p>
          </Grid>
          <Grid sm={12}>
            <p className={classes.bold}>Especialidades:</p>
            <p className={classes.psychoTextSpetialities}>{psychologists[i].spectiality}</p>
          </Grid>
          <Grid sm={12}>
            <p className={classes.psychoText}>{psychologists[i].text}</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Box mt={2}>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
        <Grid sm={12} className={classes.psychoTitlePrincipal}>
          <h2>Algunos de nuestros psicologos</h2>
        </Grid>
        {cardToRender}
      </Grid>
    </Box>
  );
};

export default PsychoCards;
