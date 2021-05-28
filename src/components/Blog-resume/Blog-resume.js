import { Divider } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { getArticles } from '../../utils/helpers';
import { setTitlePsycoCards } from '../../utils/helpers';
import theme from '../../theme/theme.yaml';

import Item from './Item';

const BlogResume = props => {
  const { category } = props;
  const texts = setTitlePsycoCards(category ? category : 'Depresion')[0];
  const posts = getArticles(category);
  return (
    <React.Fragment>
      <div className="blog-resume-container">
        {posts.length && (
          <ul>
            {posts.map((post, i) => {
              return <Item key={i} post={post} />;
            })}
          </ul>
        )}
        <p>{texts.subTex}</p>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 60px;
          padding: 25px;
        }

        p {
          font-size: 1.3rem;
          color: ${theme.color.principals.darkPurple};
          text-align: center;
        }

        @above tablet {
          .blog-resume-container {
            padding: 0 0 10px 0;
          }
          ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
          p {
            margin-bottom: 15px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

BlogResume.propTypes = {
  category: PropTypes.string.isRequired
};

export default BlogResume;
