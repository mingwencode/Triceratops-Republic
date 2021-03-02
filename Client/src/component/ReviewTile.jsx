import React from 'react';

const ReviewTile = ({key, review}) => {
  console.log('Key ', key);
  console.log('review ', review);
  const starsInReview = () => {
    for (let i = 0; i < review.review_id; i++) {
      return <i className="fas fa-star" />;
    }
  };
  return (
    <div>
      <li>
        {starsInReview()}
      </li>
    </div>

  );
};

export default ReviewTile;
