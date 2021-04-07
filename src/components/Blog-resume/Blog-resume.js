import { Divider } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { getPost } from './blogList';
import { setTitlePsycoCards } from '../../utils/helpers';
import theme from '../../theme/theme.yaml';

import Item from './Item';

const BlogResume = props => {
  const { category } = props;
  const texts = setTitlePsycoCards(category ? category : 'Depresion')[0];
  const posts = getPost(category);
  return (
    <React.Fragment>
      {posts.length && (
        <ul>
          {posts.map((post, i) => {
            return <Item key={i} post={post} />;
          })}
        </ul>
      )}
      <p>{texts.subTex}</p>
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
          ul {
            grid-template-columns: 1fr 1fr 1fr;
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
