import React from 'react';

// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({reviewArray, setReviewArray}) => {
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
    </div>
  );
};

export default RatingsAndReviewsBreakDown;
