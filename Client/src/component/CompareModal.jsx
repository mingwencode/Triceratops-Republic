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

const currentProduct = {
  name: 'Karli Shirt',
  price: 430.00,
  features: [
    { feature: 'Non-GMO', value: 'null' },
    { feature: 'Cut', value: 'Straight' },
    { feature: 'Fabric', value: 'Cool Fit' },
  ],
};

const compareProduct = {
  name: 'Murl Dress',
  price: 817.00,
  features: [
    { feature: 'Non-GMO', value: 'null' },
    { feature: 'Cut', value: 'Skinny' },
    { feature: 'Lens', value: '100% UV Protective' },
    { feature: 'Fair Trade Certified', value: 'null' },
  ],
};

const compareTableCol = (product, feature) => {
  for (let i = 0; i < product.length; i += 1) {
    if(product[i].feature === feature) {
      if (product[i].value === 'null') {
        return null;
      }
      return product[i].value;
    }
  }
  return null;
};

const renderTable = (current, compare) => {
  const currentFeatures = current.features.map((item) => item.feature);
  const compareFeatures = compare.features.map((item) => item.feature);
  const allFeatures = [...new Set(currentFeatures.concat(compareFeatures))];

  return allFeatures.map((feature) => (
    <tr>
      <TableCell key="current_col">{compareTableCol(current.features, feature)}</TableCell>
      <TableCell key="feature_col">{feature}</TableCell>
      <TableCell key="compare_col">{compareTableCol(compare.features, feature)}</TableCell>
    </tr>
  ));
};

const CompareModal = ({ isOpenModal, onDismiss, children }) => {
  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <>
      <div style={OverlayStyles} />
      <div style={ModalStyles}>
        <button type="button" onClick={() => onDismiss((prev) => !prev)}>X</button>
        <table>
          <thead>
            <tr>
              <TableHeader>{currentProduct.name}</TableHeader>
              <TableHeader>                      </TableHeader>
              <TableHeader>{compareProduct.name}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>{`$${currentProduct.price}`}</TableCell>
              <TableCell>price</TableCell>
              <TableCell>{`$${compareProduct.price}`}</TableCell>
            </tr>
            {renderTable(currentProduct, compareProduct)}
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
