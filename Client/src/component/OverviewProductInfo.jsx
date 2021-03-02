import React from 'react';

const OverviewProductInfo = ({ styles }) => {
  let styleList = styles.map((style, idx) => (
    <div>{style}</div>
  ));
  return (
    <div>
      <span>Star Rating</span>
      <form>
        <a className="reviews-a" onClick={() => (console.log('Read all reviews clicked!'))}><u>Read all reviews</u></a>
      </form>
      <div>Category</div>
      <div className="price">$300</div>
      <div><strong>Style {'> '}</strong>{'Some Style'}</div>
      <div>{styleList}</div>
    </div>
  )
};

export default OverviewProductInfo;
