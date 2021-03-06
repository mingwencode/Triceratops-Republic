/* esdivnt-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ShadedStarRating from './ShadedStarRating';

const ReviewTile = ({
// eslint-disable-next-line react/prop-types
  review, putReviewReport, putReviewHelpful, currentProductId, getReviews, dropDownselect
}) => {
  const [starRating, setStarRating] = useState();
  const [helpfulClick, setHelpfulClick] = useState(true);
  const [reportCLick, setReportClick] = useState(true);

  useEffect(() => { setStarRating((review.rating / 5) * 100); }, []);

  const submitHelpful = () => {
    if (helpfulClick) {
      putReviewHelpful(review.review_id)
      getReviews(currentProductId, dropDownselect)
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
          <p>
            {review.body}
          </p>
        </div>
        {isRecomended()}
        {generateResponse()}
        <br />
        <span>
          helpful?
        </span>
        <button
          type="button"
          onClick={() => submitHelpful()}
        >
          Yes
        </button>
        <span>
          {review.helpfulness}
        </span>
        <button
          type="button"
          onClick={() => submitReport()}
        >
          Report
        </button>
      </ul>
    </div>

  );
};

export default ReviewTile;
