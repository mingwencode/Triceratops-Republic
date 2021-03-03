/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Thumbnails = ({ thumbnail_num, images, onThumbnailClick }) => {
  // const [currentImage, setImage] = useState(0);

  return (
    <div style={styles.thumbnails}>
      {thumbnail_num}
    </div>
  );
};

const styles = {
  thumbnails: {
    width: '350px',
    height: '200px',
    backgroundColor: 'blue',
    border: '2px solid black',
    borderSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  }
};

export default Thumbnails;

// { thumbnail_num, images, onThumbnailClick }

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