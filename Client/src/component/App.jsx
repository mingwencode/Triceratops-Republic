import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview';
import RatingsAndReviews from './RatingsAndReviews';
import QAndA from './QAndA';
import RelatedProducts from './RelatedProducts';
import styled from 'styled-components';

const appStyle = {
  maxWidth: '1000px',
  margin: 'auto',
  background: 'white',
  padding: '10px'
};

const App = () => {
  const [productArray, setProductArray] = useState([]);
<<<<<<< HEAD
  const [currentProductId, setCurrentProductId] = useState(20111);
  const [productReviewArray, setProductReviewArray] = useState();
=======
  const [currentProductId, setCurrentProductId] = useState(20865);
>>>>>>> d3c38ed772cd9a1408c120845847133d21ee233e
  const [relatedProductIds, setRelatedProductIds] = useState();
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
      .catch(err => console.log('get product styles ', err));
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
        <Overview products={productArray} />
        <div style={appStyle}>
          <RelatedProducts setCurrentProductId={setCurrentProductId}/>
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
