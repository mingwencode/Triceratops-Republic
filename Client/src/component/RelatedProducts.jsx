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

const RelatedProducts = ({setCurrentProductId, relatedProductIds}) => {
  const [relatedList, setRelatedList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);
  const [productById, setProductById] = useState({});

  const getProductById = (ids) => {
    const list = [];
    ids.forEach((id) => {
      const requestOne = axios.get(`/products/${id}`);
      const requestTwo = axios.get(`/products/${id}/styles`);

      axios.all([requestOne, requestTwo])
        .then((res) => {
          const { id, name, category, default_price, features } = res[0].data;
          const styleResult = res[1].data.results;
          let url = '';
          let object = {};
          for (let i = 0; i < styleResult.length; i++) {
            if (styleResult[i]['default?']) {
              url = styleResult[i].photos[0].thumbnail_url;
              break;
            }
          }
          object = {
            id, name, category, price: default_price, features, url,
          };
          list.push(object);
        })
        .then(() => setRelatedList(list))
        .catch((err) => console.log('get product by ids ', err));
    });
  };

  useEffect(() => {
    getProductById(relatedProductIds);
  }, [relatedProductIds]);


  return (
    <Container>
      <ProductsListDiv>
        <RelatedProductsList setCurrentProductId={setCurrentProductId} relatedList={relatedList} />
      </ProductsListDiv>
      <OutFitListDiv>
        <YourOutfitList />
      </OutFitListDiv>
    </Container>
  );
};

export default RelatedProducts;
