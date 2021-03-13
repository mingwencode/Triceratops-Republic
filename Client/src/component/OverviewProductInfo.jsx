/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon,
} from 'react-share';
import styled from 'styled-components';
import ShadedStarRating from './ShadedStarRating';

const Pi = styled.div`
  padding-top: 20px;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
`;
const Reviews = styled.div`
  display: flex;
  flex: row;
  justify-content: flex-start;
`;
const ReadReviews = styled.a`
  padding-top: 5px;
  padding-left: 5px;
  &:hover{
    color: #A4BBCB;
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;
const ProductName = styled.div`
  max-width: 300px;
  font-size: 30px;
  font-family: 'Shippori Mincho', serif;
  padding-bottom: 5px;
`;
const Price = styled.span`
  padding-bottom: 10px;
`;
const StyleThumb = styled.img`
  border-radius: 50%;
  margin: 10px;
  &:hover{
    color: #A4BBCB;
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;

const OverviewProductInfo = ({
  productStyles, currentItem, currentProductId,
  styleResultsIndex, setStyleResultsIndex, setReviewModalBoolean
}) => {
  const [styleChosen, setStyleChosen] = useState();
  const shareUrl = 'http://github.com';
  const title = 'Triceratop Republic';

  const handleStyleClick = (idx) => {
    setStyleResultsIndex(idx);
    idx === styleChosen ? setStyleChosen() :
    setStyleChosen(idx);
  };

  const styleThumbnail = () => {
    const randomVar = 'to make eslint happy';
    return productStyles.results.map((style, idx) => (
      styleChosen === idx ? (
        <StyleThumb
          key={idx}
          src={style.photos[0].thumbnail_url}
          alt=""
          onClick={() => handleStyleClick(idx)}
          style={{ boxSizing: 'border-box', border: '5px solid #344B5B' }}
          height="80"
          width="70"
        />
      ) : (
        <StyleThumb
          key={idx}
          src={style.photos[0].thumbnail_url}
          alt=""
          onClick={() => handleStyleClick(idx)}
          height="80"
          width="70"
        />
      )
    ));
  };

  if (productStyles) {
    return (
      <Pi>
        <div>
          <FacebookShareButton
            name="share-to-facebook"
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <PinterestShareButton
            name="share-to-pintrest"
            url={shareUrl}
            media={`${String(window.location)}/${productStyles.results[styleResultsIndex].photos.url}`}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <TwitterShareButton
            name="share-to-twitter"
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <Reviews>
          <ShadedStarRating starPercent={currentItem.starPercent} />
          <ReadReviews className="reviews-a" onClick={() => setReviewModalBoolean(true)}><u>Read all reviews</u></ReadReviews>
        </Reviews>
        <div style={{ paddingTop: '5px' }}>
          <span>{currentItem.category}</span>
        </div>
        <div>
          <ProductName><strong>{currentItem.name}</strong></ProductName>
        </div>
        <Price className="price">
          {productStyles.results[styleResultsIndex].sale_price === null
            ? (
              <span>
                $
                {productStyles.results[styleResultsIndex].original_price}
              </span>
            )
            : (
              <span>
                $
                {productStyles.results[styleResultsIndex].sale_price}
                {'    '}
                $
                <s>
                  {productStyles.results[styleResultsIndex].original_price}
                </s>
              </span>
            )}
        </Price>
        <div style={{ padding: '10px' }}>
          <strong>
            Style
            {'> '}
          </strong>
          <span className="style-name">{productStyles.results[styleResultsIndex].name}</span>
        </div>
        {styleThumbnail()}
      </Pi>
    );
  }
  return <div>Loading..</div>;
};

export default OverviewProductInfo;
