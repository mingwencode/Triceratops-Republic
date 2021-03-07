/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import RatingsAndReviewsBreakDown from './RatingsAndReviewsBreakDown';

const RatingsAndReviews = ({ currentProductId }) => {
  const [reviewArray, setProductReviewArray] = useState();
  const [showNewMReviewModal, setNewReviewModal] = useState(false);
  const [dropDownselect, setDropDownSelect] = useState('newest');
  const [reviewMetaData, setReviewMetaData] = useState();
  const [sampleCharacterObj, setSampleCharcterObj] = useState({
    Size: {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide',
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    Length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
    Fit: {

      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },

  });

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


  useEffect(() => {
    getReviews(currentProductId, dropDownselect);
    getReviewsMeta(currentProductId);
  }, [currentProductId]);

  useEffect(() => {
    getReviews(currentProductId, dropDownselect);
  }, [dropDownselect]);


  if (reviewArray) {
    return (
      <div>
        <div>
          <RatingsAndReviewsBreakDown
            reviewArray={reviewArray}
            sampleCharacterObj={sampleCharacterObj}
            reviewMetaData={reviewMetaData}
          />
        </div>
        <div>
          <ReviewList
            reviewArray={reviewArray}
            getReviews={getReviews}
            currentProductId={currentProductId}
            dropDownselect={dropDownselect}
            sampleCharacterObj={sampleCharacterObj}
            setDropDownSelect={setDropDownSelect}
          />
        </div>
        <div>
          <NewReviewForm
            showNewReviewModal={showNewMReviewModal}
            setNewReviewModal={setNewReviewModal}
            sampleCharacterObj={sampleCharacterObj}
            reviewMetaData={reviewMetaData}
            currentProductId={currentProductId}
            getReviews={getReviews}
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
  return (
    <div>
      <NewReviewForm
        showNewReviewModal={showNewMReviewModal}
        setNewReviewModal={setNewReviewModal}
        sampleCharacterObj={sampleCharacterObj}
        reviewMetaData={reviewMetaData}
        currentProductId={currentProductId}
        getReviews={getReviews}
      />
    </div>
  );
};

export default RatingsAndReviews;
