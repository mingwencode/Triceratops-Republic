import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OverviewImageGallery = ({ images }) => {
  const {currentImage, setImage} = useState(0);


  return (
    <div>
      <form>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="gallery carousel" width="75" height="100" />
        ))}
      </form>
      <div>
        Main Image!!!!
      </div>
    </div>
  );
};

OverviewImageGallery.propTypes = {
  images: PropTypes.array
};

export default OverviewImageGallery;
