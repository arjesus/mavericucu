import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme/theme.yaml';
import { makeStyles } from '@material-ui/core';
import ImageBlock from '../Image-block/imagineBLock.component';
import 'prismjs/themes/prism-okaidia.css';
import BlogResume from '../Blog-resume/Blog-resume';

import asyncComponent from '../AsyncComponent';
import Headline from '../Article/Headline';
import Bodytext from '../Article/Bodytext';
import Meta from './Meta';
// import Author from './Author';
// import Comments from './Comments';
// import NextPrev from './NextPrev';
import PsychoCards from '../psycho-cards/psycho.cards';

import anxiety from '../../images/jpg/ansiedad-01.png';
import selfEsteem from '../../images/jpg/autoestima.png';
import couple from '../../images/jpg/terapia-pareja.png';
import depresion from '../../images/jpg/mujerjovendeprimida-01.jpg';

const useStyles = makeStyles({
  postCard: {
    backgroundColor: 'white',
    padding: '50px 80px',
    borderRadius: '1rem'
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
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0'
  },
  '@media (max-width: 600px)': {
    postCard: {
      backgroundColor: 'white',
      padding: '0px 15px',
      borderRadius: '1rem'
    }
  }
});

const blogImg = {
  Ansiedad: anxiety,
  Depresion: depresion,
  'Terapia de pareja': couple,
  Autoestima: selfEsteem
};

const Share = asyncComponent(() =>
  import('./Share')
    .then(module => {
      return module.default;
    })
    .catch(error => {})
);

const Post = props => {
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

  // console.log(blogImg[nextPost.frontmatter.category], 'aaaaaaaaaaaaaaaaaaaa');

  const imgBLockOptions = {
    title,
    text,
    button,
    category,
    img: cover
  };
  const [isPost, setIsPost] = useState(true);

  useEffect(() => {
    if (category === 'quienes somos') {
      setIsPost(false);
    }
  }, [category]);

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
        <div className={classes.buttonContainer}>
          <a className={classes.button} href={'/plans'}>
            Pedir primera sesión gratuita
          </a>
        </div>
        <footer>
          {/* <Share post={post} theme={theme} /> */}
          {/* <Author note={authornote} theme={theme} /> */}
          {/* <NextPrev next={nextPost} prev={prevPost} theme={theme} /> */}
          {text && category !== 'quienes somos' && isPost && <PsychoCards category={category} />}
          {text && category !== 'quienes somos' && isPost && <BlogResume category={category} />}
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
