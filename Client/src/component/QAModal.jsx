/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDom from 'react-dom';

const ModalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const QAModal = ({ isOpenModal, onDismiss, children }) => {
  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <>
      <div style={OverlayStyles} />
      <div style={ModalStyles}>
        <button type="button" onClick={onDismiss}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default QAModal;
