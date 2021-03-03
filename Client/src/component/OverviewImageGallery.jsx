import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const OverviewImageGallery = ({ images, prevSlide, nextSlide, currentImageIndex }) => {
  const [currentImage, setImage] = useState(0);

  const onThumbnailClick = (e, idx) => {
    e.preventDefault();
    setImage(idx);
  };

  return (
    <div>
      <div className="arrows" onClick={prevSlide}>
        <span className="prev">&#100094;</span>
      </div>
      <form>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="gallery carousel" width="75" height="100" onClick={(e) => onThumbnailClick(e, idx)}/>
        ))}
      </form>
      <div className="arrows" onClick={nextSlide}>
        <span className="next">&#100095;</span>
      </div>
      <div>
        <img className="main-image" src={images[currentImage]} alt="main diplay" width="225" height="300" />
      </div>
    </div>
  );
};

// OverviewImageGallery.propTypes = {
//   images: PropTypes.array
// };

export default OverviewImageGallery;
