import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
//import PropTypes from 'prop-types';

const ModalStyles = {
  position: 'fixed',
  borderRadius: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
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
  background: #03C9A5;
  text-align: center;
`;

const TableCol1 = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  width: 50em;
`;

const TableCol2 = styled(TableCol1)`
  text-align: center;
  width: 20em;

`;

const TableCol3 = styled(TableCol1)`
  text-align: right;
`;

const compareTableCol = (product, feature) => {
  for (let i = 0; i < product.length; i += 1) {
    if (product[i].feature === feature) {
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

  return allFeatures.map((feature, index) => (
    <tr key={index}>
      <TableCol1 key="current_col">{compareTableCol(current.features, feature)}</TableCol1>
      <TableCol2 key="feature_col">{feature}</TableCol2>
      <TableCol3 key="compare_col">{compareTableCol(compare.features, feature)}</TableCol3>
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
              <TableCol1>{`$${currentItem.price}`}</TableCol1>
              <TableCol2>price</TableCol2>
              <TableCol3>{`$${compare.price}`}</TableCol3>
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
