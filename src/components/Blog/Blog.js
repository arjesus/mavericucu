import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

const Blog = props => {
  const { posts, theme } = props;
  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
        }

        ul {
          list-style: none;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          li {
            margin: 20px 0;
          }
        }

        @above tablet {
          .main {
            padding: 15px;
          }

          ul {
            grid-gap: 35px;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
