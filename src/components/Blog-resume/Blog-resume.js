// import { Divider } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { getArticles } from '../../utils/helpers';
import { setTitlePsycoCards } from '../../utils/helpers';
import { CardPost } from '../CardPost';
import theme from '../../theme/theme.yaml';

// import Item from './Item';

const useStyles = makeStyles({
  blogCardsContainer: {
    padding: '2rem 1rem'
  },
  blogCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  blogText: {
    fontSize: '1.3rem',
    color: theme.color.principals.darkPurple,
    textAlign: 'center',
    paddingBottom: '1rem'
  }
});

const BlogResume = props => {
  const classes = useStyles();
  const { category } = props;
  const texts = setTitlePsycoCards(category ? category : 'Depresion')[0];
  const posts = getArticles(category);
  return (
    <>
      <Grid
        className={classes.blogCardsContainer}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        wrap="wrap"
        spacing={6}
      >
        {!!posts &&
          posts?.map((post, indx) => {
            const { title, img, test, url } = post;
            return (
              !!post && (
                <Grid className={classes.blogCard} item xs={12} md={6} lg={4} key={indx}>
                  <CardPost
                    title={title}
                    img={img}
                    content={test}
                    link={`/blog/${kebabCase(url)}`}
                  />
                </Grid>
              )
            );
          })}
      </Grid>
      <Typography className={classes.blogText}>{texts.subTex}</Typography>
    </>
  );
};

BlogResume.propTypes = {
  category: PropTypes.string.isRequired
};

export default BlogResume;
