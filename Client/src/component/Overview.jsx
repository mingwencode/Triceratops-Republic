/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import OverviewTopBar from './OverviewTopBar';
import OverviewImageGallery from './OverviewImageGallery';
import OverviewProductInfo from './OverviewProductInfo';
import OverviewAddToBag from './OverviewAddToBag';
import OverviewDescription from './OverviewDescription';

// let Body = styled.div`
//   .item1 { grid-area: top-bar; };
//   .item2 { grid-area: image-gallery; };
//   .item3 { grid-area: product-info; };
//   .item4 { grid-area: add-to-bag; };
//   .item5 { grid-area: description; };

//   .grid-container {
//     display: grid;
//     grid-template-areas:
//       'top-bar top-bar top-bar top-bar top-bar top-bar'
//       'image-gallery image-gallery image-gallery product-info product-info product-info'
//       'description description description description description description';
//   }

//   .grid-container > div {
//   background-color: rgba(255, 255, 255, 0.8);
//   text-align: center;
//   padding: 20px 0;
//   font-size: 20px;
// }
// `;

const ovStyle = {
  maxWidth: '1000px',
  margin: 'auto',
  background: 'white',
  padding: '10px'
};

const images = [
  'https://s7d5.scene7.com/is/image/Anthropologie/32869075_025_a?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=1080',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130231803171_001_b?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=1080',
  'https://cdn-2.jjshouse.com/upimg/s400/14/e8/1d7f95ba39b8185247fae73928c414e8.jpg',
  'https://www.lulus.com/images/product/xlarge/4445090_247570.jpg?w=375&hdpi=1',
  'https://media.tedbaker.com/t_m_pdp_primary,q_auto:best,f_auto/Product/Womens/242843_BABY-PINK_1',
];
const descriptionBullets = ['GMO and pesticide free', 'Some other crap', 'Probably untrue', 'Other information'];

const Overview = ({ currentItem, productStyles, currentProductId }) => {
  const [currentImageIndex, setImageIndex] = useState(0);
  const [styleResultsIndex, setStyleResultsIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState();
  
  const handleStyleClick = (idx) => {
    setStyleResultsIndex(idx);
  };

  if (currentItem) {
    return (
      <div>
        <div className="grid-container">
          <OverviewTopBar className="item1 top-bar" />
          <div style={ovStyle}>
            <OverviewImageGallery
              className="item2 image-gallery"
              productStyles={productStyles}
              images={images}
              currentImageIndex={currentImageIndex}
            />
            <OverviewProductInfo
              className="item3 product-info"
              currentItem={currentItem}
              productStyles={productStyles}
              currentProductId={currentProductId}
              handleStyleClick={handleStyleClick}
              styleResultsIndex={styleResultsIndex}
            />
            <OverviewAddToBag
              className="item4 add-to-bag"
              productStyles={productStyles}
              styleResultsIndex={styleResultsIndex}
            />
            <OverviewDescription
              className="item5 description"
              currentItem={currentItem}
              bullets={descriptionBullets}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Overview;
