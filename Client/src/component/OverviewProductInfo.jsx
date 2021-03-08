/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShadedStarRating from './ShadedStarRating';

const OverviewProductInfo = ({
  productStyles, currentItem, currentProductId, handleStyleClick, styleResultsIndex
}) => {

  if (productStyles) {
    return (

      <div>
        <div>
          <ShadedStarRating starPercent={currentItem.starPercent} />
        </div>
        <form>
          <a className="reviews-a" onClick={() => (console.log('Read all reviews clicked!'))}><u>Read all reviews</u></a>
        </form>
        <div>
          <span>{currentItem.category}</span>
        </div>
        <div>
          <span>{currentItem.name}</span>
        </div>
        <div>
          <span className="price">
            ${productStyles.results[styleResultsIndex].original_price}
          </span>
        </div>
        <div>
          <strong>
            Style
            {'> '}
          </strong>
          <span className="style-name">{productStyles.results[styleResultsIndex].name}</span>
        </div>
        {productStyles.results.map((style, idx) => (
          <img
            key={idx}
            src={style.photos[0].thumbnail_url}
            alt=""
            onClick={() => handleStyleClick(idx)}
            height="80"
            width="70"
          />
        ))}
      </div>
    );
  }
  return <div>Loading..</div>
};

export default OverviewProductInfo;
