/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile';
import NewReviewForm from './NewReviewForm';
import RatingsAndReviewsHeader from './RatingsAndReviewsHeader';

const MODAL_STYLES = {
  padding: '75px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000,
  maxHeight: 'calc(100vh - 350px)',
  overflowY: 'auto',
};
const MODALHEADER_STYLES = {
  position: 'fixed',
  top: '20%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '5px',
  zIndex: 1000,
  maxHeight: 'calc(100vh - 450px)',
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
};

const ModalHeader = styled.h4`
position: fixed,
display: 'grid',
gridTemplateColumns: '10% 20% 20% 20% 20%',
`
const Button = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Shippori Mincho', serif;
padding: 10px;
margin: 5px;
width: fit-content;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
 `;

 const ModalButton = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Shippori Mincho', serif;
padding: 10px;
margin: 5px;
width: fit-content;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
 `;

 const ListStyle = styled.div`
  maxHeight: 'calc(100vh - 450px)',
  overflowY: 'auto',
 `;
 const RatingsAndReviewsHeaderStyle = styled.div`
   display: flex,
   justify-content: center,
 `;
 const MoreReviewsStyle = styled.div`
 display: flex;
 justify-content: center;
 `

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
          <hr />
        </div>
      );

    });
  };

  const openModal = () => {
    if (reviewCount >= 3) setReviewModalBoolean(true);
  };

  const moreReviews = () => {
    if (reviews.length > reviewCount) {
      return (
        <Button
          type="button"
          onClick={() => {
            setReviewCount(reviewCount + 2);
          }}
        >
          More Reviews?
        </Button>
      );
    }
  };

  if (!reviewModalBoolean) {
    return (
      <ListStyle>
        <RatingsAndReviewsHeaderStyle>
          <RatingsAndReviewsHeader
            reviewArray={reviewArray}
            setDropDownSelect={setDropDownSelect}
          />
        </RatingsAndReviewsHeaderStyle>

        <div>
          {intitialReviewRender()}
        </div>
        <MoreReviewsStyle>
          {moreReviews()}
        </MoreReviewsStyle>
        {openModal()}
      </ListStyle>
    );
  }

  if (reviewModalBoolean) {
    return (
      <>

        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>

          <div>
            {intitialReviewRender()}
          </div>
          {moreReviews()}
        </div>
        <div style={MODALHEADER_STYLES}>
          <ModalHeader>
            <ModalButton
              type="button"
              onClick={() => {
                setReviewModalBoolean(!reviewModalBoolean);
                setReviewCount(2);
              }}
              >
              Close
            </ModalButton>
            <RatingsAndReviewsHeaderStyle>
              <RatingsAndReviewsHeader
                reviewArray={reviewArray}
                setDropDownSelect={setDropDownSelect}
              />
            </RatingsAndReviewsHeaderStyle>
          </ModalHeader>
        </div>
      </>
    );
  }
};
export default ReviewList;
