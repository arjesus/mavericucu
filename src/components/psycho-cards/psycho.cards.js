import React from 'react';
import theme from '../../theme/theme.yaml';
import { Grid, Box } from '@material-ui/core';

import logo from '../../../static/images/lirio.png';
import fondo from '../../images/jpg/barco-tres-encima.png';
import { makeStyles } from '@material-ui/core';
import terapeuta1 from '../../../static/images/psychology/1.png';
import terapeuta2 from '../../../static/images/psychology/2.png';
import terapeuta3 from '../../../static/images/psychology/3.png';
import terapeuta4 from '../../../static/images/psychology/4.png';
import terapeuta5 from '../../../static/images/psychology/5.png';

const arrOfData = [
  {
    number: 5,
    name: 'luis',
    text: 'Mediante nuestro formulario web o llamada telefónica',
    img: terapeuta5
  },
  {
    number: 4,
    name: 'Pedro',
    text: 'Nuestros especialistas guías te contactaran para de forma',
    img: terapeuta4
  },
  {
    number: 3,
    name: 'Raquel',
    text: 'Mediante nuestro formulario web o llamada telefónica, ',
    img: terapeuta3
  },
  {
    number: 2,
    name: 'Melisa',
    text: 'Nuestros especialistas guías te contactaran para de ',
    img: terapeuta2
  },
  {
    number: 1,
    name: 'Sara',
    text: 'Mediante nuestro formulario web o llamada telefónica',
    img: terapeuta1
  }
];

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
  const cardToRender = [];
  for (let i = 0; i <= 2; i += 1) {
    const randomPsuchology = Math.random;
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
            <img className={classes.psychoImg} src={arrOfData[i].img} />
          </Grid>
          <Grid sm={12} className={classes.psychoTitle}>
            <h3>{arrOfData[i].name}</h3>
          </Grid>
          <Grid sm={7} className={classes.psychoText}>
            <p>{arrOfData[i].text}</p>
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
