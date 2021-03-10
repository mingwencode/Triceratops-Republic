/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share';
import styled from 'styled-components';
import ShadedStarRating from './ShadedStarRating';

const Pi = styled.div`
  padding-top: 20px;
  margin-top: 10px;
`;
const Reviews = styled.div`
  flex: row;
`;
const ReadReviews = styled.a`
  &:hover{
    color: #A4BBCB;
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;
const ProductName = styled.div`
  max-width: 200px;
  font-size: 40px;
`;
const StyleThumb = styled.img`
  border-radius: 50%;
  padding-right: 10px;
`;

const OverviewProductInfo = ({
  productStyles, currentItem, currentProductId, handleStyleClick, styleResultsIndex, setReviewModalBoolean
}) => {
  const shareUrl = 'http://github.com';
  const title = 'Triceratop Republic';

  if (productStyles) {
    return (

      <Pi>
        <div>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <PinterestShareButton
            url={shareUrl}
            media={`${String(window.location)}/${productStyles.results[styleResultsIndex].photos.url}`}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <Reviews>
          <ShadedStarRating starPercent={currentItem.starPercent} />
          <form>
            <ReadReviews className="reviews-a" onClick={() => setReviewModalBoolean(true)}><u>Read all reviews</u></ReadReviews>
          </form>
        </Reviews>
        <div>
          <span>{currentItem.category}</span>
        </div>
        <div>
          <ProductName><strong>{currentItem.name}</strong></ProductName>
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
          <StyleThumb
            key={idx}
            src={style.photos[0].thumbnail_url}
            alt=""
            onClick={() => handleStyleClick(idx)}
            height="80"
            width="70"
          />
        ))}
      </Pi>
    );
  }
  return <div>Loading..</div>
};

export default OverviewProductInfo;
