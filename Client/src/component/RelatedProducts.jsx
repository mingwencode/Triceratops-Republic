import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';

const Container = styled.div`
  background: #AFFDFD;
  disply: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const products = [
  {
    id: 1, name: 'pic1', category: 'dress', price: '80', url: '../images/test_related_1.jpg',
  },
  {
    id: 2, name: 'pic2', category: 'shirt', price: '100', url: '../images/test_related_2.jpg',
  },
  {
    id: 3, name: 'pic3', category: 'skirt', price: '200', url: '../images/test_related_3.jpg',
  },
  {
    id: 4, name: 'pic4', category: 'pants', price: '999', url: '../images/test_related_1.jpg',
  },
  {
    id: 5, name: 'pic5', category: 'dress', price: '88', url: '../images/test_related_2.jpg',
  },
  {
    id: 6, name: 'pic6', category: 'glasses', price: '22', url: '../images/test_related_3.jpg',
  },
  {
    id: 7, name: 'pic7', category: 'dress', price: '33', url: '../images/test_related_2.jpg',
  },
  {
    id: 8, name: 'pic8', category: 'whatever', price: '490', url: '../images/test_related_1.jpg',
  },
  {
    id: 9, name: 'pic9', category: 'idontknow', price: '500', url: '../images/test_related_2.jpg',
  },
  {
    id: 10, name: 'pic10', category: 'lastone', price: '102', url: '../images/test_related_3.jpg',
  }];

const RelatedProducts = ({setCurrentProductId}) => {
  const [relatedList, setRelatedList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  return (
    <Container>
      <ProductsListDiv>
        <RelatedProductsList setCurrentProductId={setCurrentProductId} products={products} />
      </ProductsListDiv>
      <OutFitListDiv>
        <YourOutfitList />
      </OutFitListDiv>
    </Container>
  );
};

export default RelatedProducts;
