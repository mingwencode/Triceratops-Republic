/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsHeader = ({ reviewArray, setDropDownSelect }) => {

  return (
    <div className="wrapper-dropdown">
      <span>
        {reviewArray.results.length}
      </span>
      <span>
        reviews, sorted by
      </span>
      <form>
        <select onChange={(e) => setDropDownSelect(e.target.value)}>
          <option
            value="Helpful"
          >
            Helpful
          </option>
          <option
            value="Price"
          >
            Price
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
