/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview';
import RatingsAndReviews from './RatingsAndReviews';
import QAndA from './QAndA';
import RelatedProducts from './RelatedProducts';

const appStyle = {
  maxWidth: '1000px',
  margin: 'auto',
  background: 'white',
  padding: '10px'
};

const App = () => {
  const [productArray, setProductArray] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(20865);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [productStyles, setProductStyles] = useState();

  // OVERVIEW
  const getProducts = () => {
    axios.get('/products')
      .then((res) => (
        setProductArray(res.data)
      ))
      .then(() => getRelatedProductIds(currentProductId))
      .then(() =>getProductStyles(currentProductId))
      .catch((err) => console.log('initial products ', err));
  };

  const getProductStyles = (id) => {
    axios.get(`/products/${id}/styles`)
      .then((res) => (
        setProductStyles(res.data)
      ))
      .catch((err) => console.log('get product styles ', err));
  };


  // RELATED PRODUCTS
  const getRelatedProductIds = (id) => {
    axios.get(`/products/${id}/related`)
      .then((res) => (
        setRelatedProductIds(res.data)
      ))
      .catch(err => console.log('get related product ids ', err));
  };


  useEffect(() => {
    getProducts();
  }, [currentProductId]);



  if (relatedProductIds) {
    return (
      <div>
        {console.log('this is styles, ', productArray)}
        <Overview
          productArray={productArray}
          productStyles={productStyles}
          currentProductId={currentProductId}
        />
        <div style={appStyle}>
          <RelatedProducts setCurrentProductId={setCurrentProductId} relatedProductIds={relatedProductIds} />
          <QAndA currentProductId={currentProductId} />
          <RatingsAndReviews
            currentProductId={currentProductId}

          />
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default App;
