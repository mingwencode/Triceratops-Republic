import React, { useState } from 'react';

const NewReviewForm = ({ showNewReviewModal, setNewReviewModal }) => {
  const onClose = () => {
    setNewReviewModal(false);
  };

  if (!showNewReviewModal) {
    return null;
  }
  return (
    <div>
      <form>
        <h2> Write a New Review</h2>
        <button
          type="submit"
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default NewReviewForm;
