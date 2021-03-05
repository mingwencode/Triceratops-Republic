/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OverviewProductInfo = ({ styles, proStyles }) => {
  console.log('product styles from PRODUCT INFO', proStyles);

  // let styleList = proStyles.results.map((style, idx) => (
  //   <div key={idx}>{style}</div>
  // ));

  return (
    <div>
      <span>Star Rating</span>
      <form>
        <a className="reviews-a" onClick={() => (console.log('Read all reviews clicked!'))}><u>Read all reviews</u></a>
      </form>
      <div>Category</div>
      <div className="price">$300</div>
      <div>
        <strong>
          Style
          {'> '}
        </strong>
        Some Style
      </div>
      {/* <div>{styleList.photos.thumbnail_url}</div> */}
    </div>
  );
};

export default OverviewProductInfo;
