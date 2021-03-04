/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Thumbnails = ({ thumbnail_num, image, onThumbnailClick }) => {
  const [currentImage, setImage] = useState(0);

  return (
    <div style={styles.thumbnails}>
      <img src={image} alt="" height="70px" width="60px" />
    </div>
  );
};

const styles = {
  thumbnails: {
    width: '60px',
    height: '70px',
    backgroundColor: 'blue',
    border: '2px solid black',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  }
};

export default Thumbnails;

// {images.map((image, idx) => (
//         <img
//           key={idx}
//           src={image}
//           alt="gallery carousel"
//           width="70"
//           height="90"
//           onClick={(e) => onThumbnailClick(e, idx)}
//         />
//       ))}