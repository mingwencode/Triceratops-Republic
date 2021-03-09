/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const modalStyles = {
  position: 'fixed',
  borderRadius: '10px',
  width: 'fit-content',
  minHeight: '800px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#9fafb6',
  padding: '50px',
  zIndex: 1000
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};


// const background = productStyles.results[modalImageIndex].photos[0].url;
const OverviewModal = ({ open, onClose, productStyles }) => {
  const [modalImageIndex, setModalImageIndex] = useState(0);
  if (!open) return null;

  const handleNext = () => {
    if (modalImageIndex < productStyles.results.length - 1) {
      setModalImageIndex(((prevImage) => prevImage + 1));
    }
  };

  const handlePrevious = () => {
    if (modalImageIndex > 0) {
      setModalImageIndex((nextImage) => nextImage - 1);
    }
  };

  return (
    <>
      <div style={overlayStyle} />
      <div style={modalStyles}>
        <div>
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <button className="modalPrevBtn" onClick={handlePrevious}>Prev</button>
        </div>
        <div>
          <img src={productStyles.results[modalImageIndex].photos[0].url} alt="" height="900" />
        </div>
        <button className="modalNextBtn" onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default OverviewModal;
