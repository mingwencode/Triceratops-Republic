/* esdivnt-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ShadedStarRating from './ShadedStarRating';

const ReviewTile = ({ review }) => {
  const [starRating, setStarRating] = useState(26);
  useEffect(() => { setStarRating((review.rating / 5) * 100); }, []);
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
          type="submit"
        >
          Yes
        </button>
        <span>
          {review.helpfulness}
        </span>
        <button
          type="submit"
        >
          Report
        </button>
      </ul>
    </div>

  );
};

export default ReviewTile;
