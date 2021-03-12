/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const styles = {
  thumbnails: {
    width: '55px',
    height: '65px',
    border: '3px solid #344B5B',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    borderRadius: '3px'
  }
};

const Thumbnails = ({ idx, image, onThumbnailClick }) => (
  <div style={styles.thumbnails}>
    <img src={image} onClick={() => onThumbnailClick(idx)} alt="" height="60px" width="50px" />
  </div>
);

export default Thumbnails;
