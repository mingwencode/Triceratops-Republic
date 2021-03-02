import React, { useState } from 'react';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';


const RatingsAndReviews = ({reviewArray, setReviewArray}) => {
  const [showNewMReviewModal, setNewReviewModal] = useState(false);
   console.log(reviewArray)
  return (
    <div>
      <button
        type="button"
        onClick={() => { setNewReviewModal(!showNewMReviewModal); }}
      >
        New Review
      </button>
      <ReviewList
        setReviewArray={setReviewArray}
        reviewArray={reviewArray}
      />
      <NewReviewForm
        showNewReviewModal={showNewMReviewModal}
        setNewReviewModal={setNewReviewModal}
      />
    </div>
  );
};

export default RatingsAndReviews;
