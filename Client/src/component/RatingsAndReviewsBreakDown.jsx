import React from 'react';
import ShadedStarRatingBreakDown from './ShadedStarRatingBreakDown';
// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({reviewArray}) => {
  const productReviewArray = reviewArray[0].results;
  console.log(productReviewArray);
  const averageRating = ()=> {
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
      <ShadedStarRatingBreakDown />
    </div>
  );
};

export default RatingsAndReviewsBreakDown;
