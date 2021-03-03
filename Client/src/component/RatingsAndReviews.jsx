import React, { useState } from 'react';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import RatingsAndReviewsHeader from './RatingsAndReviewsHeader';
import RatingsAndReviewsBreakDown from './RatingsAndReviewsBreakDown';

const RatingsAndReviews = ({ reviewArray, setReviewArray }) => {
  const [showNewMReviewModal, setNewReviewModal] = useState(false);
  const [dropDownselect, setDropDownSelect] = useState('Helpful');
  return (
    <div>
      <div>
        <RatingsAndReviewsBreakDown
          reviewArray={reviewArray}
        />
      </div>
      <div>
        <RatingsAndReviewsHeader
          reviewArray={reviewArray}
          setDropDownSelect={setDropDownSelect}
        />
      </div>
      <div>
        <ReviewList
          setReviewArray={setReviewArray}
          reviewArray={reviewArray}
          dropDownSelect={dropDownselect}
        />
      </div>
      <div>
        <NewReviewForm
          showNewReviewModal={showNewMReviewModal}
          setNewReviewModal={setNewReviewModal}
        />
      </div>
      <button
        type="button"
        onClick={() => { setNewReviewModal(!showNewMReviewModal); }}
      >
        New Review
      </button>
    </div>
  );
};

export default RatingsAndReviews;
