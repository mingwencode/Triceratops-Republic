import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewList = ({reviewArray, setReviewArray}) => (
  <div>
    <ul>
      {reviewArray[0].results.map((review) =>
        <ReviewTile key={review.review_id} review={review} />)}
    </ul>
  </div>
);

export default ReviewList;
