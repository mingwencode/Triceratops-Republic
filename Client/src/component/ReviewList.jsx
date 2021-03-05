/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';


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

const ReviewList = ({ reviewArray, setReviewArray, starPercent, dropDownSelect}) => {
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewModalBoolean, setReviewModalBoolean] = useState(false);
  const [moreReviewsBoolean, setMoreReview] = useState(true);
  const [reviews, setOrganizedReviewAray] = useState(reviewArray.results);


  useEffect(() => {
    if (dropDownSelect === 'Helpful') {
      setOrganizedReviewAray(reviews.sort((a, b) => {
         return b.helpfulness - a.helpfulness;
       })
       )
    }
    if (dropDownSelect === 'Relevent') {

   }
    if (dropDownSelect === 'Newest') {
      setOrganizedReviewAray(reviews.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      )
   }
 }, [dropDownSelect]);


  if (reviews.length < 2) setMoreReview(false);


  const intitialReviewRender = () => {
    return reviews.slice(0, reviewCount).map((review) => {

      return <ReviewTile starPercent={starPercent} key={review.review_id} review={review} />;

    });
  };

  const openModal = () => {
    if (reviewCount >= 4) setReviewModalBoolean(true);
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