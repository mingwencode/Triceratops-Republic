import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal';
import ShadedStarRating from './ShadedStarRating';

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
const Star = styled.div`
  height: 10px;
  width: 10px;
`

const ProductCard = ({ product, list, removeOutFit, setCurrentProductId, currentItem}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Card>
      <SlideImg src={product.url} alt="" onClick={() => setCurrentProductId(product.id)} />
      <span>{product.category}</span>
      <span>{product.name}</span>
      <Star><ShadedStarRating starPercent={product.starPercent} /></Star>
      <span>{`$${product.price}`}</span>
      {list === 'related' ? (
        <div>
          <button type="button" onClick={() => openModal()}>⭐</button>
          <CompareModal isOpenModal={showModal} onDismiss={setShowModal} currentItem={currentItem} compare={product} />
        </div>
      )
        : <button type="button" onClick={()=> removeOutFit(product.id)}>X</button>}
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
