import React from 'react';
import Helmet from 'react-helmet';
// import OGImageLoader from 'og-image-loader';

export const LinkPreview = ({ title, description, imageUrl }) => {

  return (
    <>
      <Helmet>
        {/* Specify the Open Graph meta tags */}
        {imageUrl && (
          <meta property="og:image" content={imageUrl} />
        )}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </>
  );
};