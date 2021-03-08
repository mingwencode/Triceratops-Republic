/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import OverviewTopBar from './OverviewTopBar';
import OverviewImageGallery from './OverviewImageGallery';
import OverviewProductInfo from './OverviewProductInfo';
import OverviewAddToBag from './OverviewAddToBag';
import OverviewDescription from './OverviewDescription';

// let OvBody = styled.div`
//   .ov-container {
//     display: grid;
//     grid-template-columns: 67% 33%;
//     grid-template-rows: 200px 1fr 1fr 1fr;
//     border: 1px solid black;
//     max-width: 100%;
//     margin: auto;
//     align-items: auto;
//     padding: 5px;
//     height: 100%
//   }
// `;
// const Tb = styled.div`
//   .item1 {
//     grid-column-start: 1;
//     grid-column-end: end;
//     grid-row-start: row1-start;
//     grid-row-end: row1-end;
//    };
  //  `
  // .item2 {
  //   grid-column-start: first;
  //   grid-column-end: 2;
  //   grid-row-start: 2;
  //   grid-row-end: 4;
  //  };
  // .item3 {
  //   grid-column-start: 2;
  //   grid-column-end: end;
  //   grid-row-start: 2;
  //   grid-row-end: 3;
  //  };
  // .item4 {
  //   grid-column-start: 2;
  //   grid-column-end: end;
  //   grid-row-start: 3;
  //   grid-row-end: 3;
  //  };
  // .item5 {
  //   grid-column-start: 1;
  //   grid-column-end: end;
  //   grid-row-start: 3;
  //   grid-row-end: 4;
  //  };

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
        <div className="ov-container">
          <div>
          <OverviewTopBar className="item1 top-bar" />
          </div>
          <div>
            <div>
              <OverviewImageGallery
                className="item2 image-gallery"
                currentItem={currentItem}
                productStyles={productStyles}
                images={images}
                currentImageIndex={currentImageIndex}
              />
            </div>
            <div>
              <OverviewProductInfo
                className="item3 product-info"
                currentItem={currentItem}
                productStyles={productStyles}
                currentProductId={currentProductId}
                handleStyleClick={handleStyleClick}
                styleResultsIndex={styleResultsIndex}
              />
            </div>
            <div>
              <OverviewAddToBag
                className="item4 add-to-bag"
                productStyles={productStyles}
                styleResultsIndex={styleResultsIndex}
              />
            </div>
            <div>
              <OverviewDescription
                className="item5 description"
                currentItem={currentItem}
                bullets={descriptionBullets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Overview;
