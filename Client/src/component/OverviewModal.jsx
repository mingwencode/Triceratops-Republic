import React, { useState, useRef, useEffect } from 'react';
import OverviewModalCard from './OverviewModalCard';

const modalStyles = {
  position: 'fixed',
  width: '90%',
  height: '800px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
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

const styles = {
  view_port: {
    position: 'relative',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    zIndex: 1000,
    overflow: 'hidden'
  },
  modal_image_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content'
  }
};

const OverviewModal = ({ open, onClose, productStyles }) => {
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const modalImageContainer = React.useRef();
  if (!open) return null;

  // useEffect(() => {
  //   modalImageContainer.current.style.transitionDuration = '0.5s';
  //   modalImageContainer.current.style.transform = `translate(-${70 * modalImageIndex}px)`;
  // }, [modalImageIndex]);

  const handleNext = () => {
    if (modalImageIndex < modalImageContainer.current.children.length - 1) {
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
        <button onClick={onClose}>X</button>
      </div>
      <div>
        <button className="modalPrevBtn" onClick={handlePrevious}>Prev</button>
        <div>
          <div className="view-port" style={styles.view_port}>
            <div ref={modalImageContainer} className="modal_image_container" style={styles.modal_image_container}>
              {productStyles.results.map((image, idx) => {
                <div>
                  <OverviewModalCard
                    image={image.photos[0].url}
                  />
                </div>
              })}
            </div>
          </div>
        </div>
        <button className="modalNextBtn"onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default OverviewModal;
