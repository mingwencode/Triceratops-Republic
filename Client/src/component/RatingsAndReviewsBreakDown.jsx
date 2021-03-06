/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ShadedStarRating from './ShadedStarRating';


// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({ reviewArray, reviewMetaData, sampleCharacterObj }) => {
  const [starPercent, setStarPercent] = useState();
  const productReviewArray = reviewArray.results;

  const factorStarPecent = () => {
    let count = 0;
    // eslint-disable-next-line no-return-assign
    reviewArray.results.forEach((review) => count += review.rating);
    const average = count / reviewArray.results.length;
    setStarPercent((average / 5) * 100);
  };

  useEffect(() => {
    factorStarPecent();
  }, []);

  const percentRecommended = () => {
    let numberRecommended = 0;
    for (let i = 0; i < productReviewArray.length; i++) {
      if (productReviewArray[i].recommend) numberRecommended++;
    }
    const asPercent = (numberRecommended/productReviewArray.length) * 100;

    return asPercent;
  };

  // eslint-disable-next-line arrow-body-style
  const generateStarBar = () => {
    const numberOfStarsObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    productReviewArray.forEach((review) => {numberOfStarsObj[review.rating] += 1; });
    return Object.keys(numberOfStarsObj).map((key, index) => {
      const asPercentForBars = (numberOfStarsObj[key]/productReviewArray.length) * 100;
      return (
        <div key={index}>
          {key}
          {' '}
          stars
          {' '}
          <progress
            id="star"
            max="100"
            value={asPercentForBars}
          />
        </div>
      );
    });
  };

  const averageRating = () => {
    let count = 0;
    // eslint-disable-next-line no-return-assign
    productReviewArray.forEach((review) => count += review.rating);
    const average = count / productReviewArray.length;
    const averageRounded = Math.round(average * 10) / 10;
    return (
      <span>
        {averageRounded}
      </span>
    );
  };


  const CHAR_RATING = {
    background: 'lightgrey',
    height: '7px',
    width: '220px',
    position: 'relative',

  };



  const characteristicRating = () => {
    if (reviewMetaData) {
      const reviewChars = reviewMetaData.characteristics;
      // eslint-disable-next-line no-restricted-syntax
      const charObjKeys = Object.keys(sampleCharacterObj);
      // eslint-disable-next-line consistent-return
      return charObjKeys.map((key, index) => {
        if (reviewChars[key]) {
          const arrowPlacement = (reviewChars[key].value / 5) * 100;
          const ARROW_SLIDE_SIZE = {
            fontSize: 15,
            left: arrowPlacement,
            position: 'absolute',
          };

          return (
            <div key={index}>
              <span>{key}</span>
              <br />
              <div
                style={CHAR_RATING}
              >
                <i style={ARROW_SLIDE_SIZE} className="fas fa-arrow-up" />
              </div>
              <span style={{fontSize: '12px'}}>{sampleCharacterObj[key][1]}</span>
              <span style={{fontSize: '12px'}}>{sampleCharacterObj[key][5]}</span>
              <br />
            </div>
          );
        }
      })
    }
  };

  return (
    <div>
      <h3>Ratings &amp; Reviews </h3>
      <div>
        <span>{averageRating()}</span>
        <ShadedStarRating starPercent={starPercent} />
      </div>
      <span>
        {percentRecommended()}
        % of reviews recommend this product
      </span>
      <div>
        {generateStarBar()}
      </div>
      <br />
      <div>
        {characteristicRating()}
      </div>
      <br />

    </div>
  );
};

export default RatingsAndReviewsBreakDown;
