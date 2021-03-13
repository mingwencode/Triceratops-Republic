/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const MODAL_STYLES = styled.div`
  padding: 75px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (prefers-color-scheme:dark){
  background: #60606C};
  @media (prefers-color-scheme:light){
    background: white};
  z-index: 1000;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  border-radius: 10;
  box-sizing: border-box;
  border: solid rgba(67, 96, 117, .7) 10px;
`;

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
  font-size: 2em;
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
      <MODAL_STYLES>
        <Button name="close-modal" data-testid="button" type="button" onClick={onDismiss}>&#8855;</Button>
        {children}
      </MODAL_STYLES>
    </>
  );
};

export default QAModal;
