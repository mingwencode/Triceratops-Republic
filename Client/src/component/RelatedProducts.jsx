import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const RelatedProducts = ({setCurrentProductId, relatedProductIds, currentItem}) => {
  const [relatedList, setRelatedList] = useState([]);
  const [len, setLen] = useState(0);
  const [outfitList, setOutfitList] = useState([]);

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
      <ProductsListDiv>
        <RelatedProductsList setCurrentProductId={setCurrentProductId} currentItem={currentItem} relatedList={relatedList} len={len}/>
      </ProductsListDiv>
      <OutFitListDiv>
        <YourOutfitList currentItem={currentItem} />
      </OutFitListDiv>
    </Container>
  );
};

export default RelatedProducts;
