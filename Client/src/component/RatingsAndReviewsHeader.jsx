/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsHeader = ({ reviewArray, setDropDownSelect }) => {

  return (
    <div className="wrapper-dropdown">
      <form>

        <span>
          {reviewArray.results.length}
          {' '}
          reviews, sorted by
        </span>

        <select onChange={(e) => setDropDownSelect(e.target.value)}>
          <option
            value="helpful"
          >
            Helpful
          </option>
          <option
            value="newest"
          >
            Newest
          </option>
          <option
            value="relevant"
          >
            Relevant
          </option>
        </select>
      </form>

    </div>
  );
};

export default RatingsAndReviewsHeader;
