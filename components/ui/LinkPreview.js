import React from 'react';
import Helmet from 'react-helmet';
// import OGImageLoader from 'og-image-loader';

export const LinkPreview = ({ pet, age }) => {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(null);

  // Load the thumbnail URL using OGImageLoader
  // React.useEffect(() => {
  //   if (pet && pet.image) {
  //     OGImageLoader({ url: pet.image, width: 1200 }).then((url) => {
  //       setThumbnailUrl(url);
  //     });
  //   }
  // }, [pet]);

  return (
    <>
      <Helmet>
        {/* Specify the Open Graph meta tags */}
        {pet.imageUrl && (
          <meta property="og:image" content={pet.imageUrl} />
        )}
        <title>{`${pet.name} | ${pet.location} | ${pet.breed} | Woofurs`}</title>
      </Helmet>
    </>
  );
};