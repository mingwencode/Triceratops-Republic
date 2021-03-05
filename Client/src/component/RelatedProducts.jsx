import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import styled from 'styled-components';

const Container = styled.div`
  background: #AFFDFD;
  disply: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 800px;
  margin: 0 auto;
`;
const ProductsListDiv = styled.div`
  width : 94%;
  top: 5%;
  position: relative;
  background: #5EFDE0;
  height: 40%;
  margin: 0 auto;
  display: flex;
`;

const OutFitListDiv = styled(ProductsListDiv)`
  margin-top: 7%;
`;

const RelatedProducts = () => {
  const [relatedList, setRelatedList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  return (
    <Container>
      <ProductsListDiv>
        <RelatedProductsList />
      </ProductsListDiv>
      <OutFitListDiv>
        <YourOutfitList />
      </OutFitListDiv>
    </Container>
  );
};

export default RelatedProducts;
