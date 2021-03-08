import React from 'react';



// eslint-disable-next-line arrow-body-style
const ShadedStarRating = ({ starPercent }) => {
  const starPercentFixed = starPercent * 1.1;
  const STAR_RATING = {
    background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png")',
    // backgroundRepeat: 'repeat-5',
    fontSize: 0,
    height: '21px',
    lineHeight: 0,
    overflow: 'hidden',
    width: '110px',


  };
  const RATING_SHADE = {
    background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png")',
    // backgroundRepeat: 'repeat-5',
    fontSize: 0,
    backgroundPosition: '0 100%',
    float: 'left',
    height: '21px',
    width: starPercentFixed,
  };

  return (
    <div
      style={STAR_RATING}
    >
      <span
        style={RATING_SHADE}
      />
    </div>
  );
};

export default ShadedStarRating;
