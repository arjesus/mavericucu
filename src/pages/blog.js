import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { kebabcase, isEmpty } from 'lodash';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Grid, makeStyles, Typography, Box, useMediaQuery, useTheme } from '@material-ui/core';
import { SentimentDissatisfiedTwoTone } from '@material-ui/icons';
import classNames from 'classnames';
import theme from '../theme/theme.yaml';
import Seo from '../components/Seo';
import { handleFilterData } from '../utils/helpers';
import { SearchBox } from '../components/SearchBox';
import { CardPost } from '../components/CardPost';
import { usePagination } from '../hooks/usePagination';

const useStyles = makeStyles(themeMui => ({
  blog: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '45px 0 25px',
    marginTop: '0',
    backgroundColor: 'white',
    borderRadius: '1rem',
    [`@media (min-width: 1024px)`]: {
      padding: '70px 0 35px',
      marginTop: '70px'
    }
  },
  blogHero: {
    marginBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  blogHeroImg: {
    maxWidth: '100%'
  },
  blogTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2.5rem',
    color: theme.color.principals.darkerPurpleText,
    fontWeight: 600,

    [themeMui.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  blogSubtitle: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.gray,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1.2rem',
    fontSize: '1.3rem',
    lineHeight: '1.3',

    [themeMui.breakpoints.up('sm')]: {
      maxWidth: '80%',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      lineHeight: '1.5'
    }
  },
  blogSearchBox: {
    fontFamily: 'Montserrat, sans-serif',
    [themeMui.breakpoints.up('sm')]: {
      width: '35vw',
      maxWidth: '500px'
    }
  },
  blogCardsContainer: {
    padding: '32px 5vw'
  },
  blogCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  blogCardAnimated: {
    animationDuration: '1.5s',
    animationFillMode: 'both'
  },
  blogCardAnimatedFadeIn: {
    animationName: '$fadeIn'
  },
  blogNoSearchResultIcon: {
    color: theme.color.principals.darkPurple,
    marginBottom: '2.2rem',
    fontSize: 96
  },
  blogNoSearchResultTitle: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.darkerPurpleText,
    marginBottom: '1.5rem'
  },
  blogNoSearchResultSubTitle: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.gray,
    marginBottom: '0.5rem'
  },
  blogNoSearchResultText: {
    fontFamily: 'Montserrat, sans-serif',
    color: theme.color.principals.gray
  }
}));

const BlogPage = ({ data }) => {
  const {
    posts: { nodes: posts = [] },
    site: {
      siteMetadata: { facebook }
    }
  } = data;
  const classes = useStyles();
  const [isSearchResult, setIsSearchResult] = useState(true);
  const [isPaginatioChange, setIsPaginatioChange] = useState(false);
  const [searchInputText, setSearchInputText] = useState('');
  const {
    dataPage,
    totalPages,
    currentPage,
    setData,
    setItemsPerPage,
    setCurrentPage
  } = usePagination(posts, 6);

  const classnamesAnimated = classNames(isPaginatioChange && classes.blogCardAnimatedFadeIn);

  const themeMui = useTheme();
  const isXSBreackPoint = useMediaQuery(themeMui.breakpoints.up('xl'));

  const handlePageChange = (evnt, value) => {
    evnt.preventDefault();
    setIsPaginatioChange(true);
    setCurrentPage(value);
  };

  const handleAnimationEnd = evnt => {
    setIsPaginatioChange(false);
    evnt.target.classList.remove(classes.blogCardAnimatedFadeIn);
  };

  const handleSearchOnSubmit = searchInput => {
    const dataFiltered = handleFilterData(searchInput, posts);

    if (isEmpty(dataFiltered)) {
      setIsSearchResult(false);
      setSearchInputText(searchInput);
    } else {
      setIsSearchResult(true);
    }
    setIsPaginatioChange(true);
    setData(dataFiltered);
  };

  const handleClearSearch = () => {
    setIsSearchResult(true);
    setIsPaginatioChange(true);
    setData(posts);
  };

  useEffect(() => {
    isXSBreackPoint ? setItemsPerPage(8) : setItemsPerPage(6);
  }, [isXSBreackPoint]);

  return (
    <>
      <Grid
        className={classes.blog}
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        wrap="nowrap"
      >
        <Grid className={classes.blogHero} item xs={12}>
          <Typography className={classes.blogTitle} variant="h2" align="center" gutterBottom>
            Blog de psicología de Eva Minerva
          </Typography>
          <Box component={'figure'} mx="auto" my={2} width={200}>
            <img
              className={classes.blogHeroImg}
              src="/images/evaminerva-blog-logo.png"
              alt="BLOG DE PSICOLOGÍA DE EVA MINERVA"
            />
          </Box>
          <Typography className={classes.blogSubtitle} variant="h5" align="center" gutterBottom>
            Este es el espacio donde el equipo de psicología hace accesible sus conocimientos para
            poder dar apoyo a gestionar la vida en muchos aspectos.
          </Typography>
          <Typography className={classes.blogSubtitle} variant="h5" align="center">
            Además de varias temáticas relacionadas con la salud mental nuestro objetivo también es
            el de servir de plataforma sobre temas que necesitan más visibilidad en nuestra sociedad
            actual.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            width={'100%'}
            py={2}
            bgcolor={'#f3f3f3'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <SearchBox
              className={classes.blogSearchBox}
              handleSearchSubmit={handleSearchOnSubmit}
              handleClearSearch={handleClearSearch}
            />
          </Box>
        </Grid>
        <Grid
          className={classes.blogCardsContainer}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          wrap="wrap"
          spacing={6}
        >
          {isSearchResult ? (
            dataPage?.map((post, indx) => {
              return (
                !!post && (
                  <Grid
                    className={`${classes.blogCard} ${classes.blogCardAnimated} ${classnamesAnimated}`}
                    item
                    xs={12}
                    md={4}
                    xl={3}
                    key={indx}
                    onAnimationEnd={handleAnimationEnd}
                  >
                    <CardPost
                      className={''}
                      title={post.frontmatter.title}
                      img={post.frontmatter.cover?.childImageSharp.fluid.src}
                      content={post.excerpt}
                      link={`/blog/${kebabcase(post.fields.slug)}`}
                    />
                  </Grid>
                )
              );
            })
          ) : (
            <Box
              className={`${classes.blogCardAnimated} ${classnamesAnimated}`}
              width={'100%'}
              minHeight={480}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
            >
              <SentimentDissatisfiedTwoTone className={classes.blogNoSearchResultIcon} />
              <Typography className={classes.blogNoSearchResultTitle} variant="h3">
                {`No hay resultados para "${searchInputText}".`}
              </Typography>
              <Typography className={classes.blogNoSearchResultSubTitle} variant="h5">
                {'0 resultados coincidentes.'}
              </Typography>
              <Typography className={classes.blogNoSearchResultText} variant="h6">
                {'¡Por favor intente con un término de búsqueda diferente!'}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box
            width={'100%'}
            py={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Pagination
              className=""
              count={totalPages}
              page={currentPage}
              siblingCount={1}
              boundaryCount={1}
              variant="text"
              shape="rounded"
              onChange={handlePageChange}
              renderItem={item => (
                <PaginationItem
                  components={{ previous: '< Anterior', next: 'Siguiente >' }}
                  {...item}
                />
              )}
            />
          </Box>
        </Grid>
      </Grid>

      <Seo facebook={facebook} />
    </>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;

export const query = graphql`
  {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      nodes {
        excerpt(format: PLAIN, truncate: false, pruneLength: 10000)
        fields {
          slug
          prefix
        }
        frontmatter {
          title
          category
          author
          text
          button
          cover {
            childImageSharp {
              fluid(maxWidth: 420) {
                src
              }
            }
          }
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
