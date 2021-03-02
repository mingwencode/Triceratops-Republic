import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';

const Background = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-trmplate-columns; 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
`;

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
    { feature: 'Fabric', value: 'Cool Fit' }
  ]
};

const compareProduct = {
  name: 'Murl Dress',
  price: 817.00,
  features: [
    { feature: 'Non-GMO', value: 'null' },
    { feature: 'Cut', value: 'Skinny' },
    { feature: 'Lens', value: '100% UV Protective' },
    { feature: 'Fair Trade Certified', value: 'null'}
  ]
};


const renderTable = () => {
  let moreFeatures, lessFeatures;

  if (currentProduct.features.length > compareProduct.features.length) {
    moreFeatures = currentProduct.features;
    lessFeatures = compareProduct.features;
  } else {
    moreFeatures = compareProduct.features;
    lessFeatures = currentProduct.features;
  }

  return moreFeatures.map((feature, index) => (
    <tr>
      <TableCell>$100</TableCell>
      <TableCell>{feature.feature}</TableCell>
      <TableCell>$80</TableCell>
    </tr>

  ))
}

const CompareModal = ({ showModal, setShowModal}) => {
  const [productCard, setProductCard] = useState([]);

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <table>
              <tr>
                <TableHeader>{currentProduct.name}</TableHeader>
                <TableHeader>                      </TableHeader>
                <TableHeader>{compareProduct.name}</TableHeader>
              </tr>
              <tr>
                <TableCell>{`$${currentProduct.price}`}</TableCell>
                <TableCell>price</TableCell>
                <TableCell>{`$${compareProduct.price}`}</TableCell>
              </tr>

              {renderTable()}
            </table>
            <CloseModalButton onClick={() => setShowModal(prev => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>

  )
};

// ProductCard.propTypes = {
//   product: PropTypes.shape.isRequired,
//   //url: PropTypes.string.isRequired,
// };

export default CompareModal