/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OverviewAddToBag = ({ productStyles, styleResultsIndex }) => {
  const [sizeSelected, setSize] = useState('');
  const [qtyState, setQtyState] = useState();
  const [currentQty, setCurrentQty] = useState();
  const [addToBagId, setAddToBagId] = useState();

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
          if (sku.qty !== 0) {
            return (
              <option key={idx} value={sku.size}>{sku.size}</option>
            )
          } else {
            return 'OUT OF STOCK';
          }
        });
      }
    };

    const qtyArray = [];

    const handleSizeChange = (e) => {
      e.preventDefault();
      for (let i = 0; i < skusArray.length; i++) {
        if (skusArray[i].size === e.target.value) {
          setQtyState(skusArray[i].qty);
          setAddToBagId(skusArray[i].id);
        }
      }
      setSize(e.target.value);
    };

    const handleQtyChange = (e) => {
      e.preventDefault();
    };

    if (qtyState > 0) {
      for (let i = 0; i <= qtyState; i++) {
        qtyArray.push(i);
      }
    }

    const qtySelection = () => {
      if (qtyArray.length === 0) {
        return <option>-</option>
      }
      return qtyArray.slice(0, 16).map((qty, idx) => (
        <option key={idx} value={idx}>{qty}</option>
      ));
    };

    const pleaseSelect = () => {
      if (sizeSelected === '') {
        alert('Please Select Size and Quantity');
      }
      handleATBSubmit(addToBagId);
      alert('Added to Bag!')
      location.reload();
    };

    const addToBagBtn = () => {
      if (availabiltyChecker) {
        return <button onClick={pleaseSelect} type="button">Add To Bag</button>;
      }
    };

    const handleATBSubmit = (id) => {
      axios.post('/cart', {sku_id: id})
        .then(() => console.log('added to bag!!!'))
        .catch(() => console.log('failed to add to bag'));
    };

    return (
      <div>
        <form>
          <select name="sizes" onChange={handleSizeChange}>
            <option value="" disabled selected hidden>Select Size</option>
            {sizes()}
          </select>
          <select name="quantity" onChange={handleQtyChange}>
            {qtySelection()}
          </select>
        </form>
        <form onSubmit={handleATBSubmit}>
          {addToBagBtn()}
        </form>
        <form>
          <button type="button" className="favorite-outfit">+</button>
        </form>
      </div>
    );
  }
  return 'something';
};

export default OverviewAddToBag;
