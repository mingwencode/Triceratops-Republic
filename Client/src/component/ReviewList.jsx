/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile';
import RatingsAndReviewsHeader from './RatingsAndReviewsHeader';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  maxHeight: 'calc(100vh - 450px)',
  overflowY: 'auto',
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const ReviewList = ({ reviewArray, currentProductId, getReviews, dropDownselect, setDropDownSelect }) => {
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewModalBoolean, setReviewModalBoolean] = useState(false);
  const [moreReviewsBoolean, setMoreReview] = useState(true);

  const reviews = reviewArray.results;

  if (reviews.length < 2) setMoreReview(false);


  const putReviewHelpful = (review_id) => {
    axios.put(`/reviews/${review_id}/helpful`)
      .then(() => {
        getReviews(currentProductId, dropDownselect);
      })
      .catch((err) => console.log('put reviews ', err));
  };

  const putReviewReport = (review_id) => {
    axios.put(`/reviews/${review_id}/report`)
      .then(() => {
        getReviews(currentProductId, dropDownselect);
      })
      .catch((err) => console.log('put reviews ', err));
  };

  const intitialReviewRender = () => {
    return reviews.slice(0, reviewCount).map((review, index) => {

      return (
        <div>
          <ReviewTile
            key={index}
            putReviewHelpful={putReviewHelpful}
            review={review}
            putReviewReport={putReviewReport}
            getReviews={getReviews}
            currentProductId={currentProductId}
            dropDownselect={dropDownselect}

          />
        </div>
      );

    });
  };

  const openModal = () => {
    if (reviewCount >= 5) setReviewModalBoolean(true);
  };

  const moreReviews = () => {
    if (reviews.length > reviewCount) {
      return (
        <button
          type="button"
          onClick={() => {
            setReviewCount(reviewCount + 2);
          }}
        >
          More Reviews?
        </button>
      );
    }
  };

  if (!reviewModalBoolean) {
    return (
      <div>
        <RatingsAndReviewsHeader
          reviewArray={reviewArray}
          setDropDownSelect={setDropDownSelect}
        />

        <ul>
          {intitialReviewRender()}
        </ul>
        {moreReviews()}
        {openModal()}
      </div>
    );
  }

  if (reviewModalBoolean) {
    return (
      <>

        <div style={OVERLAY_STYLES} />

        <div style={MODAL_STYLES}>
          <button
            type="button"
            onClick={() => {
              setReviewModalBoolean(!reviewModalBoolean);
              setReviewCount(2);
            }}
          >
            Close
          </button>
          <RatingsAndReviewsHeader
          reviewArray={reviewArray}
          setDropDownSelect={setDropDownSelect}
        />

          <ul>
            {intitialReviewRender()}
          </ul>
          {moreReviews()}
        </div>
      </>
    );
  }
};
export default ReviewList;
