import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal';
import ShadedStarRating from './ShadedStarRating';

const SlideImg = styled.img`
  width: 180px;
  height: 150px;
  box-sizing: border-box;

  outline-offset: -1px;
  background: white;
  padding: 5px;
`;
 // outline: 1px solid black;

const Card = styled.div`
  width: 180px;
  height: 250px;
  background: white;
  font-size: 0.8em;=
  color: white;
  margin: 0 20px 0 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover{
    box-shadow: 0 8px 13px 0 rgba(0,0,0,0.2);
    transform: scale(1.05, 1.05);
  }
  &:active{
    transform: scale(1, 1);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Star = styled.div`
  transform: scale(0.5, 0.5);
  position:relative;
  padding-left: 5px;
  width: 0;
`;

const Span = styled.div`
  display:block;
  color: black;
  padding-left: 5px;
`;
const CompareBtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.a`
position: absolute;
font-size: 2em;
bottom: 4.5em;
left: 5.8em;
color: #344B5B;
cursor: pointer;
&:hover{
  opacity: 0.5;
}
&:active{
  opacity: 1;
}


`;

const ProductCard = ({
  product, list, removeOutFit, setCurrentProductId, currentItem}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Card>

      {list ? (
        <CompareBtnContainer>
          <SlideImg src={product.url} alt="" onClick={() => setCurrentProductId(product.id)} />
          <Button title="compare" onClick={() => openModal()}>&#9055;</Button>
          <CompareModal
            isOpenModal={showModal}
            onDismiss={setShowModal}
            currentItem={currentItem}
            compare={product}
          />
        </CompareBtnContainer>
      )
        :
        (
          <CompareBtnContainer>
            <SlideImg src={product.url} alt="" />
            <Button title="remove" onClick={() => removeOutFit(product.id)}>&#8855;</Button>
          </CompareBtnContainer>
        )}

      <Span>{product.category}</Span>
      <Span>{product.name}</Span>
      <Star><ShadedStarRating starPercent={product.starPercent} /></Star>
      <Span>{`$${product.price}`}</Span>
    </Card>

  );
};

// ProductCard.propTypes = {
//   product: PropTypes.objectOf(
//     PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number.isRequired
//     ])
//   ),
  // list: PropTypes.bool.isRequired,
  // removeOutFit: PropTypes.func,
  // setCurrentProductId: PropTypes.func.isRequired,
  // currentItem: PropTypes.object

//};

export default React.memo(ProductCard);
