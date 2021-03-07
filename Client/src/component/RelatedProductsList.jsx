import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Title = styled.div`
  font-size: 1.5em;
  color: palevioletred;
`;

const ViewPort = styled.div`
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
  display:flex;
`;

const BtnContainer = styled.div`
  height: 10px;
  width: 40px;
`;

const RelatedProductsList = ({ setCurrentProductId, currentItem, relatedList, len }) => {
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
    <div>
      <Title>RELATED PRODUCTS</Title>
      <SlideDivOne className="list_container">
        <BtnContainer>
          {current === 0 ? null: <button name="prev_btn" type="button" onClick={() => prevSilde()}>&#8678;</button>}
        </BtnContainer>
        <div>
          <ViewPort className="view-port">
            <CardContainer ref={cardContainer} className="card-container">
              {relatedList.length === len && relatedList.map((product, index) => (
                <div key={index}>
                  <ProductCard product={product} list={true} setCurrentProductId={setCurrentProductId} currentItem={currentItem} />
                </div>
              ))}
            </CardContainer>
          </ViewPort>
        </div>
        <BtnContainer>
          {current === len - 4 || len - 4 < 0 ? null : <button name="next_btn" type="button" onClick={() => nextSlide()}>&#8680;</button>}
        </BtnContainer>
      </SlideDivOne>
    </div>
  );
};

export default RelatedProductsList;
