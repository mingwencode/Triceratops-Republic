/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';

const OverviewAddToBag = ({ productStyles, styleResultsIndex }) => {
  const [sizeSelected, setSize] = useState('');
  const [qtyState, setQtyState] = useState();
  const [addToBag, setAddToBag] = useState([]);

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
            return <option key={idx} value={sku.size}>{sku.size}</option>
          } else {
            return 'OUT OF STOCK';
          }
        });
      }
    };

    let count = 0;
    const qtyArray = [];
    const handleSizeChange = (e) => {
      e.preventDefault();
      for (let i = 0; i < skusArray.length; i++) {
        if (skusArray[i].size === e.target.value) {
          setQtyState(skusArray[i].qty);
        }
      }
    };

    const handleQtyChange = (e) => {
      e.preventDefault();
      setAddToBag(e.target.value);
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
        <option value={idx}>{qty}</option>
      ));
    };

    return (
      <div>
        <form>
          <select name="sizes" onChange={handleSizeChange}>
            {sizes()}
          </select>
          <select name="quantity" onChange={handleQtyChange}>
            {qtySelection()}
          </select>
        </form>
        <form>
          <button type="button">Add To Bag</button>
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
