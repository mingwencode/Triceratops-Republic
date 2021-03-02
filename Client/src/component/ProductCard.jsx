import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import CompareModal from './CompareModal';
//import PropTypes from 'prop-types';

const SlideImg = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;



const ProductCard = ({ product }) => {
  const [productCard, setProductCard] = useState([]);

  return (
    <div>
      <SlideImg src={product.url} alt="" />

    </div>

  );
};

// ProductCard.propTypes = {
//   product: PropTypes.shape.isRequired,
//   //url: PropTypes.string.isRequired,
// };

export default ProductCard;
