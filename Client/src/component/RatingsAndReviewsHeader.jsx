/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsHeader = ({ reviewArray, setDropDownSelect }) => {

  return (
    <div className="wrapper-dropdown">
          <form>

      <span>
      {reviewArray.results.length} reviews, sorted by
      </span>

        <select onChange={(e) => setDropDownSelect(e.target.value)}>
          <option
            value="Helpful"
          >
            Helpful
          </option>
          <option
            value="Newest"
          >
            Newest
          </option>
          <option
            value="Relevent"
          >
            Relevent
          </option>
        </select>
      </form>

    </div>
  );
};

export default RatingsAndReviewsHeader;
