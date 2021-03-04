import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Title = styled.div`
  font-size: 1.5em;
  color: palevioletred;
`;

const OutfitViewPort = styled.div`
  width: 620px;
  height: 250px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
`;

const Card = styled.div`
  width: 180px;
  height: 250px;
  background: blue;
  font-size: 0.8em;
  color: white;
  margin: 0 40px 0 0;
`;

const SlideDivOne = styled.div`
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
`;

const products = [
  { id: 1, name: 'pic1', category: 'dress', price: '80', url: '../images/test_related_1.jpg' },
  { id: 2, name: 'pic2', category: 'shirt', price: '100', url: '../images/test_related_2.jpg' },
  { id: 3, name: 'pic3', category: 'skirt', price: '200', url: '../images/test_related_3.jpg' },
  { id: 4, name: 'pic4', category: 'pants', price: '999', url: '../images/test_related_1.jpg' },
  { id: 5, name: 'pic5', category: 'dress', price: '88', url: '../images/test_related_2.jpg' },
  { id: 6, name: 'pic6', category: 'glasses', price: '22', url: '../images/test_related_3.jpg' },
  { id: 7, name: 'pic7', category: 'dress', price: '33', url: '../images/test_related_2.jpg' },
  { id: 8, name: 'pic8', category: 'whatever', price: '490', url: '../images/test_related_1.jpg' },
  { id: 9, name: 'pic9', category: 'idontknow', price: '500', url: '../images/test_related_2.jpg' },
  { id: 10, name: 'pic10', category: 'lastone', price: '102', url: '../images/test_related_3.jpg' }];

const YourOutfitList = () => {
  const [current, setCurrent] = useState(0);
  //const [addCurrentProduct, setAddCurrentProduct] = useState(0);
  //const [outfitArray, setOutfitArray] = useState([]);
  const cardContainer = React.useRef();

  useEffect(() => {
    cardContainer.current.style.transitionDuration = '0.5s';
    cardContainer.current.style.transform = `translate(-${220 * current}px)`;
  }, [current]);

  const prevSilde = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current < cardContainer.current.children.length - 1) {
      setCurrent(current + 1);
    }
  };

  // const addOutFit = (productId) => {
  //   setOutfitArray([...outfitArray, products[productId]]);
  //   setAddCurrentProduct(productId + 1);
  // }

  return (
    <Grid className="list_container">
      <Title>YOUR OUTFIT</Title>
      {/* <button type="button" onClick={addOutFit(addCurrentProduct)}>Add</button> */}
      {current === 0 ? null : <button name="prev_btn" type="button" onClick={prevSilde}>Previous</button>}
      {current === products.length - 4 ? null : <button name="next_btn" type="button" onClick={nextSlide}>Next</button>}

      <div>
        <OutfitViewPort className="view-port">
          <CardContainer ref={cardContainer} className="card-container">
            {products.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <ProductCard key={product.name} product={product} />
              </div>
            ))}
          </CardContainer>
        </OutfitViewPort>
      </div>
    </Grid>

  );
};

export default YourOutfitList;
