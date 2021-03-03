import { Divider } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { getPost } from './blogList';

import Item from './Item';

const BlogResume = props => {
  const { category } = props;
  const posts = getPost(category);
  return (
    <React.Fragment>
      <ul>
        {posts.map((post, i) => {
          return <Item key={i} post={post} />;
        })}
      </ul>

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
