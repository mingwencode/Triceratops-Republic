/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Thumbnails = ({ idx, image, onThumbnailClick }) => {
  return (
    <div style={styles.thumbnails}>
      <img src={image} onClick={(e) => onThumbnailClick(idx)} alt="" height="60px" width="50px" />
    </div>
  );
};

const styles = {
  thumbnails: {
    // width: '350px',
    // height: '200px',
    width: '50px',
    height: '60px',
    border: '1px solid black',
    borderSizing: 'border-box',
    boxSizing: 'border-box',
    fontSize: '2.5em',
  }
};

export default Thumbnails;
