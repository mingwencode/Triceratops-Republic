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
  const [sampleCharacterObj, setSampleCharcterObj] = useState([{
  size:  {
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide',
    },
   width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
  comfort:  {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
   length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
   fit: {

      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },

  }])

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


  setTimeout(() => {
    const reviewChars = reviewMetaData.characteristics;
    for (const[key, value] of Object.entries(reviewChars)) {
      for (const[key2, value2] of Object.entries(sampleCharacterObj)){
      if(key === key2)
      console.log('key ', key)
      console.log('key2 ', key2)
      console.log('value ', value.value, )
      console.log('value2 ', value2)
      }
    }
    }, .1);



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
