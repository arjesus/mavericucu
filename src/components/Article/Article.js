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
          padding: ${theme.space.inset.default};
          margin: 0 auto;
        }
        @from-width tablet {
          .article {
            padding: 80px 20px 25px 20px;
            max-width: 100%;
          }
        }
        @from-width desktop {
          .article {
            padding: 80px 20px 25px 20px;
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
