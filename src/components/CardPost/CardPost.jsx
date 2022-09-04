import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Link } from 'gatsby';
import theme from '../../theme/theme.yaml';
import classNames from 'classnames';
import { truncateString } from '../../utils/helpers';

const useStyles = makeStyles({
  card: {
    fontFamily: 'Montserrat, sans-serif',
    maxWidth: 380,
    margin: [[0, 'auto']],
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: '0.4rem'
  },
  cradActionArea: {
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1
  },
  cardMedia: {
    marginBottom: '1.2rem'
  },
  cardContent: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '1rem',
    flexGrow: '1'
  },
  cardContentTitle: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1rem'
  },
  cardContentExcerpt: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.gray
  }
});

// eslint-disable-next-line react/prop-types
const CardPost = ({ className = '', img, title, content, link }) => {
  const classes = useStyles();

  const classnames = classNames(classes.card, className);

  return (
    <Card className={classnames}>
      <CardActionArea className={classes.cradActionArea}>
        <Link to={link}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            height="220"
            image={img}
            alt={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardContentTitle} variant="h5" component="div">
              {title}
            </Typography>
            <Typography className={classes.cardContentExcerpt} variant="body1">
              {truncateString(content, 150)}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default CardPost;
