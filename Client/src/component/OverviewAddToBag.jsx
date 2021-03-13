/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable semi */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  justify-content: flex-end;
  background-color: #344B5B;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  margin: 5px;
  width: fit-content;
  border: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;
const Select = styled.select`
  border-radius: 10px;
  padding-top: 5px;
  padding-right: 10px;
  font-size: 17px;
  text-align: center;
`;
const Add = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  padding-right: 10px;
`;

const OverviewAddToBag = ({ productStyles, styleResultsIndex, outfitArray,
  setOutfitArray, currentItem }) => {
  const [sizeSelected, setSize] = useState('');
  const [qtyState, setQtyState] = useState();
  const [currentQty, setCurrentQty] = useState();
  const [addToBagId, setAddToBagId] = useState();
  const qtyArray = [];

  const handleAddOutfitClick = () => {
    const tempArray = [...outfitArray];
    if (tempArray.length > 0) {
      for (const outfit of tempArray) {
        if (outfit.id === currentItem.id) {
          return;
        }
      }
      tempArray.unshift(currentItem);
      setOutfitArray(tempArray);
    } else {
      tempArray.unshift(currentItem);
      setOutfitArray(tempArray);
    }
  };

  if (productStyles !== undefined) {
    // eslint-disable-next-line prefer-const
    let { skus } = productStyles.results[styleResultsIndex];
    const skusArray = [];
    for (const skuKey in skus) {
      skusArray.push({ id: skuKey, qty: skus[skuKey].quantity, size: skus[skuKey].size });
    }
    const availabiltyChecker = skusArray.reduce((acc, sku) => (acc + sku.qty), 0);
    const sizes = () => {
      if (availabiltyChecker !== 0) {
        return skusArray.map((sku, idx) => {
          if (sku.qty > 0) {
            return (
              <option key={idx} value={sku.size}>{sku.size}</option>
            )
          }
          return 'OUT OF STOCK';
        });
      }
    };

    const handleSizeChange = (e) => {
      e.preventDefault();
      for (let i = 0; i < skusArray.length; i += 1) {
        if (skusArray[i].size === e.target.value) {
          setQtyState(skusArray[i].qty);
          setAddToBagId(skusArray[i].id);
        }
      }
      setSize(e.target.value);
    };

    const handleQtyChange = (e) => {
      e.preventDefault();
      setCurrentQty(e.target.value);
    };

    if (qtyState > 0) {
      for (let i = 0; i <= qtyState; i += 1) {
        qtyArray.push(i);
      }
    }

    const qtySelection = () => {
      if (qtyArray.length === 0) {
        return <option>-</option>;
      }
      return qtyArray.slice(0, 16).map((qty, idx) => (
        <option key={idx} value={idx}>{qty}</option>
      ));
    };

    const handleATBSubmit = (id) => {
      axios.post('/cart', { sku_id: id })
        .then(() => console.log('added to bag!!!'))
        .catch(() => console.log('failed to add to bag'));
    };

    const pleaseSelect = () => {
      if (sizeSelected === '') {
        alert('Please Select Size and Quantity');
      } else {
        currentQty > 0
          ? (handleATBSubmit(addToBagId),
          alert('Added to Bag!'))
          : alert('Please Select Quantity')
      }
    };

    const addToBagBtn = () => {
      if (availabiltyChecker) {
        return <Button name="add-to-bag" onClick={pleaseSelect} type="button">Add To Bag</Button>;
      }
    };

    return (
      <div>
        <form>
          <Select name="sizes" onChange={handleSizeChange}>
            <option disabled selected hidden>Select Size</option>
            {sizes()}
          </Select>
          <Select name="quantity" onChange={handleQtyChange}>
            {qtySelection()}
          </Select>
        </form>
        <Add>
          <form onSubmit={handleATBSubmit}>
            {addToBagBtn()}
          </form>
          <form>
            <Button name="add-to-favorites" type="button" className="favorite-outfit" onClick={handleAddOutfitClick}>+</Button>
          </form>
        </Add>
      </div>
    );
  }
  return 'something';
};

export default OverviewAddToBag;
