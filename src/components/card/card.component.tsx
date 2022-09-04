import Paper from '@material-ui/core/Paper';
import React, { CSSProperties } from 'react';
import { useStyles } from './card.styles';

interface CardProps {
  title?: string;
  height?: number | string;
  style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, children, height, style }) => {
  const classes = useStyles({ height });
  return (
    <Paper elevation={0} className={classes.wrapper} style={style}>
      {title && <div className={classes.title}>{title}</div>}
      {children}
    </Paper>
  );
};

export default Card;
