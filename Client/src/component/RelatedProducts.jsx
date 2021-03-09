import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';

const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr 40px 1fr;
  margin: 0;
  background: rgba(203, 216, 225, 1);
  padding: 30px;
`;
//background :yellow;
//background: yellow;
const ProductListTitle = styled.div`
  grid-row: 1 / 2;
  font-size: 1.17em;
  font-weight: 800;
  justify-items: left;
  color: #344B5B;
`;

const ProductsListDiv = styled.div`
  grid-row: 2 / 3;
`;

const OutfitTitle = styled(ProductListTitle)`
  grid-row: 3 / 4;
  margin-top: 5px;

`;

const OutFitListDiv = styled(ProductsListDiv)`
  grid-row: 4 / 5;
`;

const RelatedProducts = ({setCurrentProductId, relatedProductIds, currentItem}) => {
  const [relatedList, setRelatedList] = useState([]);
  const [len, setLen] = useState(0);

  const getProductById = (ids) => {
    const list = [];
    ids.forEach((pId) => {
      const requestOne = axios.get(`/products/${pId}`);
      const requestTwo = axios.get(`/products/${pId}/styles`);
      const requestThree = axios.get(`/reviews/${pId}`);

      axios.all([requestOne, requestTwo, requestThree])
        .then((res) => {
          const { id, name, category, default_price, features } = res[0].data;
          const styleResult = res[1].data.results;
          let url = '';
          let object = {};

          let count = 0;
          let starPercent = 0;
          res[2].data.results.forEach((review) => count += review.rating);
          const average = count / res[2].data.results.length;
          starPercent = ((average / 5) * 100);

          for (let i = 0; i < styleResult.length; i++) {
            if (styleResult[i]['default?']) {
              url = styleResult[i].photos[0].thumbnail_url;
              break;
            }
          }
          object = {
            id, name, category, price: default_price, features, url, starPercent,
          };
          list.push(object);
        })
        .then(() => {
          setRelatedList(list);
          setLen(list.length);
        })
        .catch((err) => console.log('get product by ids ', err));
    });
  };

  useEffect(() => {
    getProductById(relatedProductIds);
  }, [relatedProductIds]);

  return (
    <Container>
      <ProductListTitle>RELATED PRODUCTS</ProductListTitle>
      <ProductsListDiv>
        <RelatedProductsList setCurrentProductId={setCurrentProductId} currentItem={currentItem} relatedList={relatedList} len={len}/>
      </ProductsListDiv>
      <OutfitTitle>YOUR OUTFIT</OutfitTitle>
      <OutFitListDiv>
        <YourOutfitList currentItem={currentItem} />
      </OutFitListDiv>
    </Container>
  );
};

export default RelatedProducts;
