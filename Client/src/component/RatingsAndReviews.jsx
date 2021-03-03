import React, { useState } from 'react';
import NewReviewForm from './NewReviewForm';

const RatingsAndReviews = () => {
  const [showNewMReviewModal, setNewReviewModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => { setNewReviewModal(!showNewMReviewModal); }}
      >
        New Message
      </button>
      <NewReviewForm
        showNewReviewModal={showNewMReviewModal}
        setNewReviewModal={setNewReviewModal}
      />
    </div>
  );
};

export default RatingsAndReviews;
