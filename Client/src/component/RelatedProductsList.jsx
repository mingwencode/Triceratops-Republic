import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';


const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;

`;

const ViewPort = styled.div`
  padding-top: 10px;
  margin: 0 auto;
  width: 960px;
  height: 280px;
  overflow: hidden;

`;

const CardContainer = styled.div`
  display: flex;
  flexDirection: row;
  width: fit-content;
  margin-top: 5px;

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
    transform: scale(1.8, 1.8);
  }
  &:active{
    transform: scale(1, 1);
  }
`;

const RelatedProductsList = ({ setCurrentProductId, currentItem, relatedList, len }) => {
  const [current, setCurrent] = useState(0);
  const cardContainer = React.useRef();

  useEffect(() => {
    cardContainer.current.style.transitionDuration = '0.5s';
    cardContainer.current.style.transform = `translate(-${240 * current}px)`;
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
      <ViewPort className="view-port">
        <CardContainer ref={cardContainer} className="card-container">
          {relatedList.length === len && relatedList.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} list={true} setCurrentProductId={setCurrentProductId} currentItem={currentItem} />
            </div>
          ))}
        </CardContainer>
      </ViewPort>
      <BtnContainerRelatedR>
        {current === len - 4 || len - 4 < 0 ? null : <Button name="next_btn" type="button" onClick={() => nextSlide()}>&#8250;</Button>}
      </BtnContainerRelatedR>
    </ListContainer>
  );
};

export default RelatedProductsList;
