import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal';
import ShadedStarRating from './ShadedStarRating';


const SlideImg = styled.img`
  width: 180px;
  height: 165px;
  box-sizing: border-box;
  outline-offset: -1px;
  background: white;
  padding: 5px;
  object-fit: cover;
`;

const Card = styled.div`
  width: 180px;
  height: 250px;
  background: white;
  font-size: 0.8em;
  color: white;
  margin: 0 30px 0 30px;
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
  font-family: 'Roboto', sans-serif;
  font-size: smaller;
  color: black;
  padding-left: 5px;
`;

const Span1 = styled(Span)`
  display:inline;
  padding-right: 5px;
  position: relative;
  top: -5px;
`;

const Star1 = styled(Star)`
  position: relative;
  top: -5px;
`;

const SpanSale = styled(Span1)`
  text-decoration: line-through;
`;

const Name = styled(Span)`
  font-size: 1.2em;
  font-weight: 500;
  font-family: 'Shippori Mincho', serif;
  padding-bottom: 3px;
`;
const CompareBtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.a`
position: absolute;
font-size: 2em;
bottom: 5em;
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
          <SlideImg data-testid="relatedListImage" src={product.smallUrl} alt="" onClick={() => setCurrentProductId(product.id)} />
          <Button data-testid="compareBtn" title="compare" onClick={() => openModal()}>&#9055;</Button>
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
            <SlideImg data-testid="relatedOutfitImage" src={product.smallUrl} alt="" />
            <Button data-testid="closeBtn" title="remove" onClick={() => removeOutFit(product.id)}>&#8855;</Button>
          </CompareBtnContainer>
        )}
      <Span>{product.category}</Span>
      <Name>{product.name}</Name>
      {product.salePrice ?
      (<>
        <Span1>{`$${product.salePrice}`}</Span1>
        <SpanSale>{`$${product.price}`}</SpanSale>
        <Star1><ShadedStarRating starPercent={product.starPercent} /></Star1>
       </>)
       :(<><Span>{`$${product.price}`}</Span>
       <Star><ShadedStarRating starPercent={product.starPercent} /></Star></>)}

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