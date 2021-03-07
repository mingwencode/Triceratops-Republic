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
  padding: '10px',
};

const App = () => {
  //const [productArray, setProductArray] = useState([]);
<<<<<<< HEAD
  const [currentProductId, setCurrentProductId] = useState(20130);
  const [relatedProductIds, setRelatedProductIds] = useState();
  const [productStyles, setProductStyles] = useState({});
=======
  const [currentProductId, setCurrentProductId] = useState(20111);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [productStyles, setProductStyles] = useState();
>>>>>>> e0cab50ca69c60f42ab6ac7c7d166df11d95cc42
  const [currentItem, setCurrentItem] = useState({});


  // RELATED PRODUCTS
  const getRelatedProductIds = (id) => {
    axios.get(`/products/${id}/related`)
      .then((res) => (
        setRelatedProductIds(res.data)
      ))
      .catch(err => console.log('get related product ids ', err));
  };


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

  if (relatedProductIds) {
    return (
      <div>
        <Overview
          currentItem={currentItem}
          productStyles={productStyles}
        />
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
