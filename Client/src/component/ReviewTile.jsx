/* esdivnt-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ShadedStarRating from './ShadedStarRating';
import styled from 'styled-components';

const Button = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Shippori Mincho', serif;
padding: 10px;
margin: 5px;
width: fit content;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
 `;
const ReviewPhoto = styled.img`
 padding-left: 10px;
 `;
 const StyledA = styled.a`
  font-family: 'Shippori Mincho', serif;
  font-weight: bold;
  padding-right: 8px;
  text-decoration: underline;
  font-size: smaller;
  &:hover {
    color: #344B5B
  }
`;


const ReviewTile = ({
// eslint-disable-next-line react/prop-types
  review, putReviewReport, putReviewHelpful,
}) => {
  const [starRating, setStarRating] = useState();
  const [helpfulClick, setHelpfulClick] = useState(true);
  const [reportCLick, setReportClick] = useState(true);

  useEffect(() => { setStarRating((review.rating / 5) * 100); }, []);

  const submitHelpful = () => {
    if (helpfulClick) {
      putReviewHelpful(review.review_id)
      setHelpfulClick(false)
    }
  }
  const submitReport = () => {
    if(reportCLick) {
      putReviewReport(review.review_id)
      setReportClick(false)
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const renderPhotos = () => {
    if (review.photos.length !== 0) {
      return (
        <p>{review.photos.map((photo, index) => <ReviewPhoto src={photo.url} key={index} alt="review" height="50" width="50" />)}</p>
      )
    }
  }
  const isRecomended = () => {
    if (review.recommend) {
      return (
        <div>
          <i
            className="fas fa-check"
          />
          <span>
            {' '}
            I Recommend This Product
          </span>
        </div>
      );
    }
  };

  const generateResponse = () => {
    if (review.response) {
      return (
        <div>
          <span>
            Response:
          </span>
          <br />
          <span>
            {review.response}
          </span>
        </div>
      );
    }
  };
  return (
    <div>
      <ul>
        <ShadedStarRating starPercent={starRating} />
        <div key="reviewName">
          <span
            className="reviewName"
          >
            {review.reviewer_name}
          </span>
          <span
            className="reviewDate"
          >
            {formatDate(review.date)}
          </span>
        </div>
        <div key="reviewSummary">
          <span
            className="reviewSummary"
          >
            {review.summary}
          </span>
        </div>
        <div
          key="reviewBody"
        >
          <span>
            {review.body}
          </span>
        </div>
        <div>
          {renderPhotos()}
        </div>
        {isRecomended()}
        {generateResponse()}
        <br />
        <span>
          helpful?
          {' '}
        </span>
        <StyledA
          type="button"
          onClick={() => submitHelpful()}
        >
          Yes
          {'  '}
          &#40; {review.helpfulness} &#41;
        </StyledA>
        {'  '}
        <StyledA
          type="button"
          onClick={() => submitReport()}
        >
          Report
        </StyledA>
      </ul>
    </div>

  );
};

export default ReviewTile;
