/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import Thumbnails from './OverviewThumbnails';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const OverviewImageGallery = ({ images, prevSlide, nextSlide, currentImageIndex }) => {
  const [currentImage, setImage] = useState(0);
  const thumbContainer = React.useRef();
  const [temp, setTemp] = useState();

  const onThumbnailClick = (e, idx) => {
    e.preventDefault();
    setImage(idx);
  };

  useEffect(() => {
    thumbContainer.current.style.transitionDuration = '0.5s';
    thumbContainer.current.style.transform = `translate(-${350 * currentImage}px)`;
    let firstThumbClone = thumbContainer.current.children[0].cloneNode(true);
    let lastThumbClone = thumbContainer.current.children[thumbContainer.current.children.length - 1].cloneNode(true);

    thumbContainer.current.insertBefore(lastThumbClone, thumbContainer.current.children[0]);
    thumbContainer.current.append(firstThumbClone);
  }, [currentImage]);


  const handleNext = () => {
    if (currentImage < thumbContainer.current.children.length - 1) {
      setImage((currentImage + 1));
    }
  };

  const handlePrevious = () => {
    if (currentImage !== 0) {
      setImage(currentImage - 1);
    }
  };

  return (
    <div>
      {console.log(thumbContainer)}
      {/* <div className="arrows" onClick={prevSlide}>
        <span className="prev">&#100094;</span>
      </div> */}
      <button onClick={handlePrevious}>Previous</button>
      <div className="view-port" style={styles.view_port}>
        <div ref={thumbContainer} className="thumbnail-container" style={styles.thumbnail_container}>
          <Thumbnails
            thumbnail_num="0"
            // images={images}
            // onThumbnailClick={onThumbnailClick}
          />
          <Thumbnails thumbnail_num="1" />
          <Thumbnails thumbnail_num="2" />
          <Thumbnails thumbnail_num="3" />
        </div>
      </div>
      {/* <div className="arrows" onClick={nextSlide}>
        <span className="next">&#100095;</span>
      </div> */}
      <button onClick={handleNext}>Next</button>
      <div>
        <img className="main-image" src={images[currentImage]} alt="main diplay" height="300" width="225" />
      </div>
    </div>
  );
};

const styles = {
  view_port: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    height: '200px',
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  thumbnail_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content'
  }
};

// OverviewImageGallery.propTypes = {
//   images: PropTypes.array
// };

export default OverviewImageGallery;
