import React from 'react';
import theme from '../../theme/theme.yaml';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { setPsychologist } from '../../utils/helpers';

const useStyles = makeStyles({
  cardContainer: {
    padding: '20px 0'
  },
  psychoImg: {
    width: '120px',
    borderRadius: '50%'
  },
  psychoTitle: {
    margin: '10px 0'
  },
  psychoText: {},
  psychoTitlePrincipal: {
    fontSize: '1.8rem',
    color: theme.color.principals.darkPurple,
    textAlign: 'center',
    marginBottom: '60px'
  },
  '@media (max-width: 600px)': {
    cardContainer: {
      padding: '20px 0px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }
});

const PsychoCards = props => {
  const classes = useStyles();
  const psychologists = setPsychologist(props.category);
  console.log(psychologists, 'bbbbbbbbbbbbbbb')
  const cardToRender = [];
  for (let i = 0; i <= 2; i += 1) {
    cardToRender.push(
      <Grid item md={3} sm={12}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={10}
          className={classes.cardContainer}
        >
          <Grid sm={6}>
            <img className={classes.psychoImg} src={psychologists[i].img} />
          </Grid>
          <Grid sm={12} className={classes.psychoTitle}>
            <h3>{psychologists[i].name}</h3>
          </Grid>
          <Grid sm={7} className={classes.psychoText}>
            <p>{psychologists[i].spectiality}</p>
          </Grid>
          <Grid sm={7} className={classes.psychoText}>
            <p>{psychologists[i].text}</p>
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
