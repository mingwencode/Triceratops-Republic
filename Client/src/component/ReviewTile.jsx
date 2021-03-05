/* eslint-disable react/prop-types */
import React from 'react';

const ReviewTile = ({ review }) => {
  const starsInReview = () => Array.from(Array(review.rating), () => (<i className="fas fa-star" />));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const isRecomended = () => {
    if (review.recommend) {
      return (
        <li>
          <i
            className="fas fa-check"
          />
          <span>
            I Recommend This Product
          </span>
        </li>
      );
    }
  };
  const generateResponse = () => {
    if (review.response) {
      return (
        <li>
          <span>
            Response:
          </span>
          <br />
          <span>
            {review.response}
          </span>
        </li>
      );
    }
  };

  return (
    <li>
      <ul>
        <li className="reviews">{starsInReview()}</li>
        <li>
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
        </li>
        <li>
          <span
            className="reviewSummary"
          >
            {review.summary}
          </span>
        </li>
        <li
          className="reviewBody"
        >
          <p>
            {review.body}
          </p>
        </li>
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
    </li>

  );
};

export default ReviewTile;
