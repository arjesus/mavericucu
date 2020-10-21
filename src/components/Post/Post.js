import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import ImageBlock from '../Image-block/imagineBLock.component';
import 'prismjs/themes/prism-okaidia.css';

import asyncComponent from '../AsyncComponent';
import Headline from '../Article/Headline';
import Bodytext from '../Article/Bodytext';
import Meta from './Meta';
import Author from './Author';
import Comments from './Comments';
import NextPrev from './NextPrev';

const Share = asyncComponent(() =>
  import('./Share')
    .then(module => {
      return module.default;
    })
    .catch(error => {})
);

const Post = props => {
  const useStyles = makeStyles({
    postCard: {
      backgroundColor: 'white',
      padding: '50px 80px',
      borderRadius: '1rem'
    }
  });
  const classes = useStyles();
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, author, category, button, cover, text }
    },
    authornote,
    facebook,
    next: nextPost,
    prev: prevPost,
    theme
  } = props;
  console.log(post, 'bbbbbbbbbbbbbbbb');

  const imgBLockOptions = {
    title,
    text,
    button,
    img: cover
  };

  return (
    <React.Fragment>
      <div className={classes.postCard}>
        <header>
          {text ? (
            <ImageBlock imgBLockOptions={imgBLockOptions} />
          ) : (
            <>
              <Headline title={title} theme={theme} />
              <Meta prefix={prefix} author={author} category={category} theme={theme} />
            </>
          )}
        </header>
        <Bodytext html={html} theme={theme} />
        <footer>
          <Share post={post} theme={theme} />
          {/* <Author note={authornote} theme={theme} /> */}
          <NextPrev next={nextPost} prev={prevPost} theme={theme} />
          {/* <Comments slug={slug} facebook={facebook} theme={theme} /> */}
        </footer>
      </div>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
