import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal';

const SlideImg = styled.img`
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  outline: 1px solid black;
  outline-offset: -1px;
  background: #000;
`;

const Card = styled.div`
  width: 180px;
  height: 250px;
  background: blue;
  font-size: 0.8em;
  color: white;
  margin: 0 40px 0 0;
`;

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Card>
      <SlideImg src={product.url} alt="" />
      <span>{product.category}</span>
      <br />
      <span>{product.name}</span>
      <br />
      <span>{`$${product.price}`}</span>
      <button type="button" onClick={openModal}>⭐</button>
      <CompareModal isOpenModal={showModal} onDismiss={setShowModal} />
    </Card>

  );
};

ProductCard.defaultProps = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default React.memo(ProductCard);
