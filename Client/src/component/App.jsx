/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview';
import RatingsAndReviews from './RatingsAndReviews';
import QAndA from './QAndA';
import RelatedProducts from './RelatedProducts';
import OverviewTopBar from './OverviewTopBar';

const AppBackground = styled.div`
  background: rgba(215, 213, 215, 1);
`;

const AppBody = styled.div`
  display: grid;
  grid-template-auto: 25% 23% 25% 27%;
  grid-template-columns: auto;
  box-shadow: 10px 50px 100px 0 rgba(0,0,0,0.1);
  background: rgba(203, 216, 225, 1);
  max-width: 1250px;
  margin: auto;
  padding: 10px;
  font-family: 'Shippori Mincho', serif;
`;

const Tb = styled.div`
  /* grid-column: 2; */
`;

const OverviewStyle = styled.div`
  grid-row-start: 1;
`;

const RelatedProductsStyle = styled.div`
  grid-row-start: 2;
  border-bottom: 1px dotted #344B5B;
`;

const QASyles = styled.div`
  grid-row: 3 / 4;
  border-bottom: 1px dotted #344B5B;
`;

const ReviewsStyles = styled.div`
  grid-row-start: 4;

`;

const App = () => {
  const [currentProductId, setCurrentProductId] = useState(20506);
  const [relatedProductIds, setRelatedProductIds] = useState();
  const [productStyles, setProductStyles] = useState();
  const [currentItem, setCurrentItem] = useState({});
  const [reviewModalBoolean, setReviewModalBoolean] = useState(false);
  const [outfitArray, setOutfitArray] = useState([]);

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
        const {
          id, name, category, default_price, features, slogan, description
        } = res[0].data;
        const styleResult = res[1].data.results;
        let url = '';
        let smallUrl = '';
        let salePrice = '';
        let object = {};
        setProductStyles(res[1].data);

        let count = 0;
        let starPercent = 0;
        res[2].data.results.forEach((review) => count += review.rating);
        const average = count / res[2].data.results.length;
        starPercent = ((average / 5) * 100);

        for (let i = 0; i < styleResult.length; i += 1) {
          if (styleResult[i]['default?']) {
            url = styleResult[i].photos[0].thumbnail_url;
            smallUrl = styleResult[i].photos[0].url;
            salePrice = styleResult[i].sale_price;
            break;
          }
        }
        object = {
          id, name, category, price: default_price, features, url, starPercent, slogan, description, smallUrl, salePrice,
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

  if (relatedProductIds && productStyles) {
    return (
      <AppBackground>
        <Tb>
          <OverviewTopBar className="item1 top-bar" />
        </Tb>
        <AppBody>
          <OverviewStyle>
            <Overview
              currentItem={currentItem}
              productStyles={productStyles}
              setReviewModalBoolean={setReviewModalBoolean}
              outfitArray={outfitArray}
              setOutfitArray={setOutfitArray}
            />
          </OverviewStyle>
          <RelatedProductsStyle>
            <RelatedProducts setCurrentProductId={setCurrentProductId} relatedProductIds={relatedProductIds} currentItem={currentItem} outfitArray={outfitArray} setOutfitArray={setOutfitArray} />
          </RelatedProductsStyle>
          <QASyles>
            <QAndA currentProductId={currentProductId} />
          </QASyles>
          <ReviewsStyles>
            <RatingsAndReviews currentProductId={currentProductId} currentItem={currentItem} setReviewModalBoolean={setReviewModalBoolean} reviewModalBoolean={reviewModalBoolean} />
          </ReviewsStyles>
        </AppBody>
      </AppBackground>
    );
  }
  return <div>Loading...</div>;
};

export default App;
