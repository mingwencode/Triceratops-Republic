/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShadedStarRating from './ShadedStarRating';

const AverageStyle = styled.span`
display: flex;
justify-content: start;
font-wieght: bold;
font-size: 60px;
`;


const StyleStars = styled.span`
display: flex;
justify-content: start;
`
const ProgStyle = styled.progress`
webkit-appearance: none;
   appearance: none;
  width: 200px;
  height: 10px;
}
`
const CharStyle = styled.span`
text-decoration: underline;
font-size: small;
font-family: 'Roboto', sans-serif;
`
const StyledSpanFont = styled.span`
font-family: 'Roboto', sans-serif;
font-sizeL: medium;
`
const Styledh3 = styled.h3`
font-family: 'Shippori Mincho', serif;
(prefers-color-scheme:light){
  color: #344B5B;}
  @media (prefers-color-scheme:dark){
    color: #D7D5D7;
font-weight: 800;
font-size: 1.17em;
`
// eslint-disable-next-line arrow-body-style
const RatingsAndReviewsBreakDown = ({ reviewArray, reviewMetaData, sampleCharacterObj }) => {
  const [starPercent, setStarPercent] = useState();
  const productReviewArray = reviewArray.results;

  const factorStarPecent = () => {
    let count = 0;
    // eslint-disable-next-line no-return-assign
    reviewArray.results.forEach((review) => count += review.rating);
    const average = count / reviewArray.results.length;
    setStarPercent((average / 5) * 100);
  };

  useEffect(() => {
    factorStarPecent();
  }, [reviewArray]);

  const percentRecommended = () => {
    let numberRecommended = 0;
    for (let i = 0; i < productReviewArray.length; i++) {
      if (productReviewArray[i].recommend) numberRecommended++;
    }
    const asPercent = (numberRecommended/productReviewArray.length) * 100;
    const averagePrecentRounded = Math.round(asPercent * 10) / 10;
    return averagePrecentRounded;
  };

  // eslint-disable-next-line arrow-body-style
  const generateStarBar = () => {
    const numberOfStarsObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    productReviewArray.forEach((review) => {numberOfStarsObj[review.rating] += 1; });
    return Object.keys(numberOfStarsObj).map((key, index) => {
      const asPercentForBars = (numberOfStarsObj[key] / productReviewArray.length) * 100;
      return (
        <div key={index}>
          <CharStyle>
            {key}
            {' '}
            stars
            {' '}
          </CharStyle>
          <ProgStyle
            id="star"
            max="100"
            value={asPercentForBars}
          />
        </div>
      );
    });
  };

  const averageRating = () => {
    let count = 0;
    // eslint-disable-next-line no-return-assign
    productReviewArray.forEach((review) => count += review.rating);
    const average = count / productReviewArray.length;
    const averageRounded = Math.round(average * 10) / 10;
    return (
      <span>
        {averageRounded}
      </span>
    );
  };


  const CHAR_RATING = {
    background: '#59585D',
    height: '7px',
    width: '300px',
    position: 'relative',

  };



  const characteristicRating = () => {
    if (reviewMetaData) {
      const reviewChars = reviewMetaData.characteristics;
      // eslint-disable-next-line no-restricted-syntax
      const charObjKeys = Object.keys(sampleCharacterObj);
      // eslint-disable-next-line consistent-return
      return charObjKeys.map((key, index) => {
        if (reviewChars[key]) {
          const arrowPlacement = (reviewChars[key].value / 5) * 300;
          const ARROW_SLIDE_SIZE = {
            fontSize: 15,
            left: arrowPlacement,
            position: 'absolute',
          };

          return (
            <div key={index}>
              <StyledSpanFont>{key}</StyledSpanFont>
              <br />
              <div
                style={CHAR_RATING}
              >
                <i style={ARROW_SLIDE_SIZE} className="fas fa-arrow-up" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px' }}>{sampleCharacterObj[key][1]}</span>
                <span style={{ fontSize: '12px' }}>{sampleCharacterObj[key][5]}</span>
              </div>
            </div>
          );
        }
      })
    }
  };

  return (
    <div>
      <Styledh3>RATINGS &amp; REVIEWS </Styledh3>
      <div>
        <AverageStyle>{averageRating()}</AverageStyle>
        <StyleStars>
          <ShadedStarRating starPercent={starPercent} />
        </StyleStars>
      </div>
      <StyledSpanFont>
        {percentRecommended()}
        % of reviews recommend this product
      </StyledSpanFont>
      <div>
        {generateStarBar()}
      </div>
      <br />
      <div>
        {characteristicRating()}
      </div>
      <br />

    </div>
  );
};

export default RatingsAndReviewsBreakDown;
