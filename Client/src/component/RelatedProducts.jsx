import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import styled from 'styled-components';
import CompareModal from './CompareModal';

const Container = styled.div`
  background: #AFFDFD;
  disply: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 600px;
`;
const ListDiv = styled.div`
  width : 90%;
  display: flex;
  position: relative;
  background: #5EFDE0;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

const RelatedProducts = () => {
  const [relatedList, setRelatedList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Container>
      <ListDiv>
        <button type="button" onClick={openModal} >compare</button>
        <CompareModal showModal={showModal} setShowModal={setShowModal} />
        <RelatedProductsList />
        <br />
      </ListDiv>
      <div>
        <YourOutfitList />
      </div>
    </Container>
  );
};

export default RelatedProducts;
