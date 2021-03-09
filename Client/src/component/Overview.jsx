/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import OverviewTopBar from './OverviewTopBar';
import OverviewImageGallery from './OverviewImageGallery';
import OverviewProductInfo from './OverviewProductInfo';
import OverviewAddToBag from './OverviewAddToBag';
import OverviewDescription from './OverviewDescription';

let OvBody = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  /* grid-template-rows: 34% 33% 33%; */
  max-width: 100%;
  margin: 0;
  padding: 5px;
`;
const Tb = styled.div`
  /* grid-column: 2; */
`;
const Ig = styled.div`
  grid-column-start: 1;

`;
const Pi = styled.div`
  grid-column-start: 2;
`;
// const AddTB = styled.div`
//   grid-column-start: 2;
// `;
const Des = styled.div`
  /* grid-column-start: 1;
  grid-column-end: end; */
  /* grid-row-start: 3;
  grid-row-end: 4; */
`;

const Overview = ({ currentItem, productStyles, currentProductId }) => {
  const [currentImageIndex, setImageIndex] = useState(0);
  const [styleResultsIndex, setStyleResultsIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState();

  const handleStyleClick = (idx) => {
    setStyleResultsIndex(idx);
  };

  if (productStyles) {
    return (
      <div>
        <Tb>
          <OverviewTopBar className="item1 top-bar" />
        </Tb>
        <div className="ov-container">
          <div>
            <OvBody>
              <Ig>
                <OverviewImageGallery
                  className="item2 image-gallery"
                  currentItem={currentItem}
                  productStyles={productStyles}
                  currentImageIndex={currentImageIndex}
                />
              </Ig>
              <Pi>
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
              </Pi>
            </OvBody>
            <Des>
              <OverviewDescription
                className="item5 description"
                currentItem={currentItem}
              />
            </Des>
          </div>
        </div>
      </div>
    );
  }
};

export default Overview;
