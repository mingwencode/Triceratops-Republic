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
  const [productArray, setProductArray] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(20111);
=======
  //const [productArray, setProductArray] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(20119);
>>>>>>> fb76c9a594ce3ac1d26eab8ae17f66f9cbb7c24b
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [productStyles, setProductStyles] = useState({});
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

  // const getProductStyles = (id) => {
  //   axios.get(`/products/${id}/styles`)
  //     .then((res) => (
  //       setProductStyles(res.data)
  //     ))
  //     .catch(err => console.log('get product styles ', err));
  // };


  // RELATED PRODUCTS
  const getRelatedProductIds = (id) => {
    axios.get(`/products/${id}/related`)
      .then((res) => (
        setRelatedProductIds(res.data)
      ))
      .catch(err => console.log('get related product ids ', err));
  };

  // const getCurrentProductInfo = (id) => {
  //   axios.get(`/products/${id}`)
  //     .then((res) => (
  //       setCurrentItem(res.data)
  //     ))
  //     .then (getRelatedProductIds(id))
  //     .catch(err => console.log('get product info', err));
  // };

  const getCurrentProductInfo = (pId) => {
    const requestOne = axios.get(`/products/${pId}`);
    const requestTwo = axios.get(`/products/${pId}/styles`);
    const requestThree = axios.get(`/reviews/${pId}`);

    axios.all([requestOne, requestTwo, requestThree])
      .then((res) => {
        const { id, name, category, default_price, features, slogan, description } = res[0].data;
        const styleResult = res[1].data.results;
        let url = '';
        let largeUrl ='';
        let object = {};
        setProductStyles(res[1].data);

        let count = 0;
        let starPercent = 0;
        res[2].data.results.forEach((review) => count += review.rating);
        const average = count / res[2].data.results.length;
        starPercent = ((average / 5) * 100);

        for (let i = 0; i < styleResult.length; i++) {
          if (styleResult[i]['default?']) {
            url = styleResult[i].photos[0].thumbnail_url;
            largeUrl = styleResult[i].photos[0].url;
            break;
          }
        }
        object = {
          id, name, category, price: default_price, features, url, starPercent, slogan, description, largeUrl,
        };
        return object;
      })
      .then((data) => {
        setCurrentItem(data);
      })
      .catch((err) => console.log('get product by ids ', err));
  };


  useEffect(() => {
    getCurrentProductInfo(currentProductId);
    getRelatedProductIds(currentProductId);
  }, [currentProductId]);

<<<<<<< HEAD
=======

>>>>>>> fb76c9a594ce3ac1d26eab8ae17f66f9cbb7c24b
  if (relatedProductIds) {
    return (
      <div>
        <Overview currentItem={currentItem} productStyles={productStyles} />
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
