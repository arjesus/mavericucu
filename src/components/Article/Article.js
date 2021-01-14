import React from 'react';
import PropTypes from 'prop-types';

const Article = props => {
  const { children, theme } = props;

  return (
    <React.Fragment>
      <article className="article">{children}</article>

      {/* --- STYLES --- */}
      <style jsx>{`
        .article {
          padding: 5px;
          margin: 0 auto;
        }
        @from-width tablet {
          .article {
            padding: 70px 0px 25px 0px;
            max-width: 100%;
          }
        }
        @from-width desktop {
          .article {
            padding: 70px 0px 25px 0px;
            max-width: 100%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default Article;
