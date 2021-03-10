/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile';
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
  borderRadius: 10,
  boxSizing: 'border-box',
  border: 'solid rgba(67, 96, 117, .7) 10px'
};
const MODALHEADER_STYLES = {
  position: 'fixed',
  top: '16%',
  right: '71%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'transparent',
  padding: '5px',
  zIndex: 1000,
  maxHeight: 'calc(100vh - 450px)',
  display: 'grid',
  gridTemplateColumns: '10% 70% 20%',
};



const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
};

const ButtonNewReview = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 500;
padding: 8px;
margin: 3px;
width: fit-content;
height: 40px;
border: none;
outline: none;
border-radius: 8px;
box-sizing: border-box;

`;

const Button = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 500;
padding: 8px;
margin: 3px;
width: fit-content;
height: 40px;
border: none;
outline: none;
border-radius: 8px;
box-sizing: border-box;
 `;

 const ModalButton = styled.button`
 border: none;
 background: none;
 font-size: 1.5em;
 color: #344B5B;
 &:focus{
   outline: none;
 }
 &:hover{
   color: #A4BBCB;
   transform: scale(1.5, 1.5);
 }
 `;

 const ListStyle = styled.div`
  maxHeight: 'calc(100vh - 450px)';
  overflowY: 'auto';
 `;
 const RatingsAndReviewsHeaderStyle = styled.div`
   display: flex;
   justify-content: flex-end;
   padding-bottom: 10px;
 `;
 const MoreReviewsStyle = styled.div`
 display: flex;
 justify-content: center;
 `;

 const ReviewTileStyle = styled.div`
 &:nth-child(odd){
  background-color: #D8E2E9;
}
 `
 const StyledH2 = styled.h2`
  background: rgba(203, 216, 225, 1);
  border-radius: 8px;
  box-sizing: border-box;

`;

const ReviewList = ({ reviewArray, currentProductId, getReviews, dropDownselect, setDropDownSelect, showNewMReviewModal, setReviewModalBoolean, reviewModalBoolean, setNewReviewModal }) => {
  const [reviewCount, setReviewCount] = useState(2);
  const [moreReviewsBoolean, setMoreReview] = useState(false);
  const reviews = reviewArray.results;
  useEffect(() => {
    if (reviews.length < 2) setMoreReview(false);
  }, [reviewArray]);

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
    return reviews.slice(0, reviewCount).map((review) => {

      return (
        <ReviewTileStyle>
          <ReviewTile
            key={reviewCount}
            putReviewHelpful={putReviewHelpful}
            review={review}
            putReviewReport={putReviewReport}
            getReviews={getReviews}
            currentProductId={currentProductId}
            dropDownselect={dropDownselect}

          />
          <hr />
        </ReviewTileStyle>
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
      <div>
        <br />
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
            <ButtonNewReview
              type="button"
              onClick={() => { setNewReviewModal(!showNewMReviewModal); }}
            >
              New Review
            </ButtonNewReview>
          </MoreReviewsStyle>
          {openModal()}
        </ListStyle>
      </div>
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
          <ModalButton
            type="button"
            onClick={() => {
              setReviewModalBoolean(!reviewModalBoolean);
              setReviewCount(2);
            }}
          >
            &#8855;
          </ModalButton>
        </div>
      </>
    );
  }
};
export default ReviewList;
