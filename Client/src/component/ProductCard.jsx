import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SlideImg = styled.img`
  width: 150px;
  height: 150px;
  //border-radius: 10px 0 0 10px;
  boxSizing: border-box;
  //border: 2px solid black;
  outline: 1px solid black;
  outline-offset: -1px;
  background: #000;
`;
const styles = {
  card: {
    width: '150px',
    height: '200px',
    backgroundColor: 'blue',
    //border: '2px solid black',
    //boxSizing: 'border-box',
    fontSize: '0.8em',
    color: 'white',
    margin: '0 50px 0 0',
  },
};

const ProductCard = ({ product}) => {
  const [productCard, setProductCard] = useState([]);

  return (
    <div style={styles.card}>
      <SlideImg src={product.url} alt="" />
      {/* {card_number} */}
      <span>{product.category}</span>
      <br />
      <span>{product.name}</span>
      <br />
      <span>{`$${product.price}`}</span>
    </div>

  );
};


ProductCard.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default React.memo(ProductCard);
