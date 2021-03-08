/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const ModalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  borderRadius: '10px',
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

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.5em;
  color: #344B5B;
  &:focus{
    outline: none;
  }
  &:hover{
    color: #A4BBCB;
    transform: scale(1.5, 1.5);
  }
`;

const QAModal = ({ isOpenModal, onDismiss, children }) => {
  if (!isOpenModal) return null;

  return (
    <>
      <div style={OverlayStyles} />
      <div style={ModalStyles}>
        <Button type="button" onClick={onDismiss}>&#8855;</Button>
        {children}
      </div>
    </>
  );
};

export default QAModal;
