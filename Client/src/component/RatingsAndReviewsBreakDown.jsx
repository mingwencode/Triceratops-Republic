import React from 'react';
import ShadedStarRating from './ShadedStarRating';
// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({reviewArray}) => {
  const productReviewArray = reviewArray.results;
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
      <span>{averageRating()}</span>
      <ShadedStarRating />
    </div>
  );
};

export default RatingsAndReviewsBreakDown;
