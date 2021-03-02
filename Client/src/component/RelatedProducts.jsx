import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import styled from 'styled-components';

const ListDiv = styled.div`
  background: #5EFDE0;
  height: 400px;
  align-items: center;
`;

const RelatedProducts = () => {
  const [relatedList, setRelatedList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  return (
    <div className="container">
      <ListDiv><RelatedProductsList /></ListDiv>
      <div><YourOutfitList /></div>
    </div>
  );
};

export default RelatedProducts;
