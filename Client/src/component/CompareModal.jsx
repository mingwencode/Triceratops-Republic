import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
//import PropTypes from 'prop-types';

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


const TableHeader = styled.th`
  border: 1px solid #dddddd;
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
`;

const compareTableCol = (product, feature) => {
  for (let i = 0; i < product.length; i += 1) {
    if(product[i].feature === feature) {
      if (product[i].value === null) {
        return null;
      }
      return product[i].value;
    }
  }
  return null;
};

const renderTable = (current, compare) => {
  const currentFeatures = current.features.map((item) => (
    item.value !== null ? item.feature : null
  ));
  const compareFeatures = compare.features.map((item) => (
    item.value !== null ? item.feature : null
  ));
  const allFeatures = [...new Set(currentFeatures.concat(compareFeatures))];

  return allFeatures.map((feature) => (
    <tr>
      <TableCell key="current_col">{compareTableCol(current.features, feature)}</TableCell>
      <TableCell key="feature_col">{feature}</TableCell>
      <TableCell key="compare_col">{compareTableCol(compare.features, feature)}</TableCell>
    </tr>
  ));
};

const CompareModal = ({ isOpenModal, onDismiss, children, currentItem, compare }) => {
  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <>
      <div style={OverlayStyles} />
      <div style={ModalStyles}>
        <button type="button" onClick={() => onDismiss((prev) => !prev)}>X</button>
        <table>
          <thead>
            <tr>
              <TableHeader>{currentItem.name}</TableHeader>
              <TableHeader>                      </TableHeader>
              <TableHeader>{compare.name}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>{`$${currentItem.default_price}`}</TableCell>
              <TableCell>price</TableCell>
              <TableCell>{`$${compare.price}`}</TableCell>
            </tr>
            {renderTable(currentItem, compare)}
          </tbody>
        </table>

        {children}
      </div>
    </>,
    document.getElementById('portal'),

  );
};

// ProductCard.propTypes = {
//   product: PropTypes.shape.isRequired,
//   //url: PropTypes.string.isRequired,
// };

export default CompareModal;
