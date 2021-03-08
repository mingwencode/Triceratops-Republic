/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Thumbnails = ({ thumbnail_num, image, onThumbnailClick }) => {
  const [currentImage, setImage] = useState(0); // not in use

  return (
    <div style={styles.thumbnails}>
      {thumbnail_num}
      <img src={image} alt="" height="70px" width="60px" />
    </div>
  );
};

const styles = {
  thumbnails: {
    width: '350px',
    height: '200px',
    width: '60px',
    height: '70px',
    backgroundColor: 'blue',
    border: '2px solid black',
    borderSizing: 'border-box',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  }
};

export default Thumbnails;
