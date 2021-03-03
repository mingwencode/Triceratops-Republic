import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const YourOutfitList = () => {
  const [listOfOutfitCards, setListOfOutfitCards] = useState([]);

  return (
    <div className="list_container">
      <h1>YOUR OUTFIT</h1>
    </div>
  );
};

export default YourOutfitList;
