import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Title = styled.div`
  font-size: 1.5em;
  color: palevioletred;
`;

const OutfitViewPort = styled.div`
  margin: 0 auto;
  width: 840px;
  height: 250px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
`;

const SlideDivOne = styled.div`
  margin: 0 auto;
`;

const products = [
  { name: 'pic1', category: 'dress', price: '80', url: '../images/test_related_1.jpg' },
  { name: 'pic2', category: 'shirt', price: '100', url: '../images/test_related_2.jpg' },
  { name: 'pic3', category: 'skirt', price: '200', url: '../images/test_related_3.jpg' },
  { name: 'pic4', category: 'pants', price: '999', url: '../images/test_related_1.jpg' },
  { name: 'pic5', category: 'dress', price: '88', url: '../images/test_related_2.jpg' },
  { name: 'pic6', category: 'glasses', price: '22', url: '../images/test_related_3.jpg' },
  { name: 'pic7', category: 'dress', price: '33', url: '../images/test_related_2.jpg' },
  { name: 'pic8', category: 'whatever', price: '490', url: '../images/test_related_1.jpg' },
  { name: 'pic9', category: 'idontknow', price: '500', url: '../images/test_related_2.jpg' },
  { name: 'pic10', category: 'lastone', price: '102', url: '../images/test_related_3.jpg' }];

const YourOutfitList = () => {
  const [current, setCurrent] = useState(0);
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

  return (
    <SlideDivOne className="list_container">
      <Title>YOUR OUTFIT</Title>
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
    </SlideDivOne>

  );
};

export default YourOutfitList;
