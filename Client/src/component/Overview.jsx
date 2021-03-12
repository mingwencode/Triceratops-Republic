/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OverviewImageGallery from './OverviewImageGallery';
import OverviewProductInfo from './OverviewProductInfo';
import OverviewAddToBag from './OverviewAddToBag';
import OverviewDescription from './OverviewDescription';

const OvBody = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  max-width: 100%;
  margin: 0;
  padding: 5px;
`;
const Ig = styled.div`
  grid-column-start: 1;

`;
const Pi = styled.div`
  grid-column-start: 2;
`;

const Overview = ({ currentItem, productStyles, currentProductId,
  setReviewModalBoolean, outfitArray, setOutfitArray }) => {
  const [styleResultsIndex, setStyleResultsIndex] = useState(0);

  if (productStyles) {
    return (
      <div>
        <div className="ov-container">
          <div>
            <OvBody>
              <Ig>
                <OverviewImageGallery
                  className="item2 image-gallery"
                  currentItem={currentItem}
                  productStyles={productStyles}
                />
              </Ig>
              <Pi>
                <div>
                  <OverviewProductInfo
                    className="item3 product-info"
                    currentItem={currentItem}
                    productStyles={productStyles}
                    currentProductId={currentProductId}
                    styleResultsIndex={styleResultsIndex}
                    setStyleResultsIndex={setStyleResultsIndex}
                    setReviewModalBoolean={setReviewModalBoolean}
                  />
                </div>
                <div>
                  <OverviewAddToBag
                    className="item4 add-to-bag"
                    productStyles={productStyles}
                    styleResultsIndex={styleResultsIndex}
                    outfitArray={outfitArray}
                    setOutfitArray={setOutfitArray}
                    currentItem={currentItem}
                  />
                </div>
              </Pi>
            </OvBody>
            <div>
              <OverviewDescription
                className="item5 description"
                currentItem={currentItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Overview;
