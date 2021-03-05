/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import ShadedStarRating from './ShadedStarRating';
// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({reviewArray, starPercent}) => {
  const productReviewArray = reviewArray.results;

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
    return Object.keys(numberOfStarsObj).map((key) => {
      const asPercentForBars = (numberOfStarsObj[key]/productReviewArray.length) * 100;
      return (
        <div>
          {key}
          stars
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
      <ul>
        {generateStarBar()}
      </ul>

    </div>
  );
};

export default RatingsAndReviewsBreakDown;
