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
`;


const RelatedProductsList = ({setCurrentProductId, products}) => {
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
      <Title>RELATED PRODUCTS</Title>
      {current === 0 ? null : <button name="prev_btn" type="button" onClick={() => prevSilde()}>Previous</button>}
      {current === products.length - 4 ? null : <button name="next_btn" type="button" onClick={() => nextSlide()}>Next</button>}

      <div>
        <ViewPort className="view-port">
          <CardContainer ref={cardContainer} className="card-container">
            {products.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <ProductCard product={product} list="related" setCurrentProductId={setCurrentProductId} starPercent={100} />
              </div>
            ))}
          </CardContainer>
        </ViewPort>
      </div>
    </SlideDivOne>

  );
};

export default RelatedProductsList;
