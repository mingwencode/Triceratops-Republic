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
<<<<<<< HEAD
  const [productArray, setProductArray] = useState();
  const [currentProductId, setCurrentProductId] = useState(20970);
  const [relatedProductIds, setRelatedProductIds] = useState();
=======
  const [productArray, setProductArray] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(20119);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
>>>>>>> 97430c6d42501eec3236fc3a932191f02e55b831
  const [productStyles, setProductStyles] = useState();
  const [currentItem, setCurrentItem] = useState({})

  // OVERVIEW
  // const getProducts = () => {
  //   axios.get('/products')
  //     .then((res) => (
  //       setProductArray(res.data)
  //     ))
  //     .then(() => getRelatedProductIds(currentProductId))
  //     .then(() =>getProductStyles(currentProductId))
  //     .catch((err) => console.log('initial products ', err));
  // };

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

  const getCurrentProductInfo = (id) => {
    axios.get(`/products/${id}`)
      .then((res) => (
        setCurrentItem(res.data)
      ))
      .then (getRelatedProductIds(id))
      .catch(err => console.log('get product info', err));
  };

  useEffect(() => {
    getCurrentProductInfo(currentProductId);
  }, [currentProductId]);

  if (relatedProductIds) {
    return (
      <div>
        <Overview products={productArray} />
        <div style={appStyle}>
          <RelatedProducts setCurrentProductId={setCurrentProductId} relatedProductIds={relatedProductIds} currentItem={currentItem} />
          <QAndA currentProductId={currentProductId} />
          <RatingsAndReviews currentProductId={currentProductId} />
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default App;
