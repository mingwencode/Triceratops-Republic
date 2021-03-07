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

const Grid = styled.div`
  display: grid;
`;

const YourOutfitList = ({currentItem}) => {
  const [current, setCurrent] = useState(0);
  const [outfitArray, setOutfitArray] = useState([]);
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

  const addOutFit = (item) => {
    let addedList = [...outfitArray];
    for (let i = 0; i < addedList.length; i++) {
      if (addedList[i].id === item.id) {
        return <p>Product added</p>;
      }
    }
    addedList.unshift(item);
    setOutfitArray(addedList);
  };

  const removeOutFit = (id) => {
    const newList = outfitArray.filter((item) => (item.id !== id));
    setOutfitArray(newList);
  };

  return (
    <Grid className="list_container">
      <Title>YOUR OUTFIT</Title>
      <button name="add_btn" type="button" onClick={() => addOutFit(currentItem)}>Add</button>
      {current === 0 ? null : <button name="prev_btn" type="button" onClick={() => prevSilde()}>Previous</button>}
      {current === outfitArray.length - 3 || outfitArray.length - 3 < 0 ? null : <button name="next_btn" type="button" onClick={() => nextSlide()}>Next</button>}

      <div>
        <OutfitViewPort className="view-port">
          <CardContainer ref={cardContainer} className="card-container">
            {(outfitArray.length === 0) ? null : (outfitArray.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} removeOutFit={removeOutFit} />
              </div>
            )))}
          </CardContainer>
        </OutfitViewPort>
      </div>
    </Grid>

  );
};

export default YourOutfitList;
