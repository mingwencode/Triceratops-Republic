/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import RatingsAndReviewsHeader from './RatingsAndReviewsHeader';
import RatingsAndReviewsBreakDown from './RatingsAndReviewsBreakDown';

const RatingsAndReviews = ({ currentProductId }) => {
  const [reviewArray, setProductReviewArray] = useState();
  const [showNewMReviewModal, setNewReviewModal] = useState(false);
  const [dropDownselect, setDropDownSelect] = useState('newest');
  const [reviewMetaData, setReviewMetaData] = useState();


  const getReviews = (id, sortOption) => {
    axios.get(`/reviews/${id}&sort=${sortOption}`)
      .then((res) => (setProductReviewArray(res.data)))
      .catch((err) => console.log('get reviews ', err));
  };

  const getReviewsMeta = (id) => {
    axios.get(`/reviews/meta/${id}`)
      .then((res) => (
        setReviewMetaData(res.data)
      ))
      .catch((err) => console.log('get review meta ', err));
  };

  const postReviews = (review) => {
    axios.post('/reviews', review)
      .then(() => getReviews())
      .catch((err) => console.log('post review ', err));
  };

  useEffect(() => {
    getReviews(currentProductId, dropDownselect);
    getReviewsMeta(currentProductId)
  }, []);

  useEffect(() => {
    getReviews(currentProductId, dropDownselect);
  }, [dropDownselect]);


if (reviewArray) {
  const reviews = reviewArray.results;
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
          reviewArray={reviewArray}
          getReviews={getReviews}
          currentProductId={currentProductId}
          dropDownselect={dropDownselect}

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
}
  return <div> hello</div>
};

export default RatingsAndReviews;
