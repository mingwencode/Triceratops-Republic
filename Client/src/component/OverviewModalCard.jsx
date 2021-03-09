import React from 'react';

const OverviewModalCard = ({ image }) => {
  return (
    <div style={styles.modalImage}>
      <img src={image} alt=""/>
    </div>
  )
}

const styles = {
  modalImage: {
    width: '50%',
    height: '50%',
    backgroundColor: 'blue',
    border: '2px solid black',
    borderSizing: 'border-box',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  }
};

export default OverviewModalCard;
