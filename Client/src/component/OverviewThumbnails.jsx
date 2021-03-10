/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Thumbnails = ({ idx, image, onThumbnailClick }) => {
  return (
    <div style={styles.thumbnails}>
      <img src={image} onClick={(e) => onThumbnailClick(idx)} alt="" height="70px" width="60px" />
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
