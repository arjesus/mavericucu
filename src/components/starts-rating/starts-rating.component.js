import React from 'react';
import theme from '../../theme/theme.yaml';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(themeMaterial => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.color.principals.darkerPurpleText,
    '& > * + *': {
      marginTop: themeMaterial.spacing(1)
    }
  },
  ratingStarts: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiRating-sizeLarge': {
      fontSize: '3rem'
    }
  }
}));

const defaultValue = 4.5;

export default function HoverRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.ratingStarts}>
        <Rating name="size-large" defaultValue={defaultValue} size="large" />
        <span>{defaultValue}</span>
      </div>
      <p>Basado en 1.492 evaluaciones y referencias web de nuestros psicólogos online</p>
    </div>
  );
}
