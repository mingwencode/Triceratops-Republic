import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';


const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
`;

const ViewPortContainer = styled.div`
  margin: 0 auto;
  position: relative;
  grid-column : 2 / 3;
  justify-self: center;
`;

const ViewPort = styled.div`
  margin: 0 auto;
  width: 840px;
  height: 250px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
`;

const BtnContainerRelatedL = styled.div`
  align-self: center;
  justify-self: right;
  grid-column: 1 / 2;
`;

const BtnContainerRelatedR = styled(BtnContainerRelatedL)`
  grid-column: 3 / 4;
  justify-self: left;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  color: #344B5B;
  &:focus{
    outline: none;
  }
  &:hover{
    font-size: 3em;
  }
  &:active{
    font-size: 2em;
  }
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
    <ListContainer>
      <BtnContainerRelatedL>
        {current === 0 ? null : <Button name="prev_btn" type="button" onClick={() => prevSilde()}>&#8249;</Button>}
      </BtnContainerRelatedL>
      <ViewPortContainer>
        <ViewPort className="view-port">
          <CardContainer ref={cardContainer} className="card-container">
            {relatedList.length === len && relatedList.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} list={true} setCurrentProductId={setCurrentProductId} currentItem={currentItem} />
              </div>
            ))}
          </CardContainer>
        </ViewPort>
      </ViewPortContainer>
      <BtnContainerRelatedR>
        {current === len - 4 || len - 4 < 0 ? null : <Button name="next_btn" type="button" onClick={() => nextSlide()}>&#8250;</Button>}
      </BtnContainerRelatedR>
    </ListContainer>
  );
};

export default RelatedProductsList;
