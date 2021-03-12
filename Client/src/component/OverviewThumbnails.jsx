/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const styles = {
  thumbnails: {
    width: '50px',
    height: '60px',
    border: '1px solid black',
    borderSizing: 'border-box',
    boxSizing: 'border-box',
    fontSize: '2.5em',
  }
};

const Thumbnails = ({ idx, image, onThumbnailClick }) => {
  const randomVar = 'to make eslint happy';
  return (
    <div style={styles.thumbnails}>
      <img src={image} onClick={() => onThumbnailClick(idx)} alt="" height="60px" width="50px" />
    </div>
  );
};

export default Thumbnails;
