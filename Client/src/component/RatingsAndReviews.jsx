/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import RatingsAndReviewsHeader from './RatingsAndReviewsHeader';
import RatingsAndReviewsBreakDown from './RatingsAndReviewsBreakDown';

const RatingsAndReviews = ({ reviewArray, setReviewArray, setDropDownSelect }) => {
  const [showNewMReviewModal, setNewReviewModal] = useState(false);
  const [starPercent, setStarPercent] = useState(0);
  const reviews = reviewArray.results;

  const factorStarPecent = () => {
    let count = 0;
    // eslint-disable-next-line no-return-assign
    reviews.forEach((review) => count += review.rating);
    const average = count / reviews.length;
    setStarPercent((average / 5) * 100);
  };

  useEffect(() => {
    factorStarPecent();
  }, []);

  return (
    <div>
      <div>
        <RatingsAndReviewsBreakDown
          reviewArray={reviewArray}
          starPercent={starPercent}
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
          starPercent={starPercent}
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
