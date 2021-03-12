/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const SelectStyle = styled.select`
  height: 20px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-left: 10px;

  option {
    color: black;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  `;
const HeaderWrapper = styled.div`
font-family: 'Roboto', sans-serif;
`;
// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsHeader = ({ reviewArray, setDropDownSelect }) => {

  return (
    <HeaderWrapper>
      <div>

        <span>
          {reviewArray.results.length}
          {' '}
          reviews, sorted by
        </span>

        <SelectStyle onChange={(e) => setDropDownSelect(e.target.value)}>
          <option
            value="relevant"
          >
            Relevant
          </option>
          <option
            value="newest"
          >
            Newest
          </option>
          <option
            value="helpful"
          >
            Helpful
          </option>
        </SelectStyle>
      </div>

    </HeaderWrapper>
  );
};

export default RatingsAndReviewsHeader;
