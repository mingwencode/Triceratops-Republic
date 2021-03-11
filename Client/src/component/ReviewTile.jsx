/* esdivnt-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShadedStarRating from './ShadedStarRating';

const ImageP = styled.p`
  padding-left: 43px;
`;

const StyledImg = styled.img`
  padding: 5px;
  border-radius: 10px;
`;

 const StyledA = styled.a`
  cursor: pointer;
  font-family: 'Shippori Mincho', serif;
  font-weight: bold;
  padding-right: 8px;
  text-decoration: underline;
  font-size: smaller;
  &:hover {
    color: #344B5B
  }
`;
const ReviewSummary = styled.span`
  font-weight: bold;
  font-size: larger;
`;
const DateStyle = styled.span`
display: flex;
justify-content: start;
font-style: italic;
font-size: smaller;
`;
const NameDateWrap = styled.div`
display: inline;
text-align: right;
`
const StyledSpanFont = styled.span`
font-family: 'Roboto', sans-serif;
`

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
        <ImageP>{review.photos.map((photo, index) => <StyledImg src={photo.url} key={index} alt="review" height="50" width="50" />)}</ImageP>
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
          <StyledSpanFont>
            {' '}
            I Recommend This Product
          </StyledSpanFont>
        </div>
      );
    }
  };

  const generateResponse = () => {
    if (review.response) {
      return (
        <div>
          <StyledSpanFont>
            Response:
          </StyledSpanFont>
          <br />
          <StyledSpanFont>
            {review.response}
          </StyledSpanFont>
        </div>
      );
    }
  };
  return (
    <div style={{ paddingTop: '3px' }}>
      <ul>
        <ShadedStarRating starPercent={starRating} />
        <NameDateWrap>
            {review.reviewer_name}
          <DateStyle>
            {formatDate(review.date)}
          </DateStyle>
        </NameDateWrap>
        <div key="reviewSummary">
          <ReviewSummary>
            {review.summary}
          </ReviewSummary>
        </div>
        <br />
        <div
          key="reviewBody"
        >
          <StyledSpanFont>
            {review.body}
          </StyledSpanFont>
        </div>
        <div>
          {renderPhotos()}
        </div>
        {isRecomended()}
        {generateResponse()}
        <br />
        <StyledSpanFont>
          Helpful?
          {' '}
        </StyledSpanFont>
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
