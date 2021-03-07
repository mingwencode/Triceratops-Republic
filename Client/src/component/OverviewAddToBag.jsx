/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';

const OverviewAddToBag = ({ productStyles, styleResultsIndex }) => {
  const [sizeSelected, setSize] = useState('');
  const [qtyState, setQtyState] = useState();
  // const [inStock, setInStock] = useState(true);
  const sizes = [];
  const skusArray = [];
  let count = 0;
  const qtyArray = [];

  if (productStyles !== undefined) {
    // eslint-disable-next-line prefer-const
    let { skus } = productStyles.results[styleResultsIndex];
    for (const skuKey in skus) {
      skusArray.push({ id: skuKey, qty: skus[skuKey].quantity, size: skus[skuKey].size });
    }

    const handleSizeChange = (e) => {
      e.preventDefault();
      for (var i = 0; i < skusArray.length; i++) {
        if (skusArray[i].size === e.target.value) {
          setQtyState(skusArray[i].qty);
        }
      }
    };

    const availabiltyChecker = skusArray.reduce((acc, sku) => (acc + sku.qty), 0);

    const numberGenerator = () => {
      while (count <= qtyState && count < 15) {
        qtyArray.push(count + 1);
      }
    };
    console.log(qtyArray);
    return (
      <div>
        {console.log(skusArray)}
        <form>
          <select name="sizes" onChange={handleSizeChange}>
            {
            // if (availabiltyChecker !== 0) {
              skusArray.map((sku, idx) => {
                if (sku.qty !== 0) {
                  return <option value={sku.size}>{sku.size}</option>
                }
              })
            // }
            }
          </select>
          <select name="quantity" value="" onChange={() => console.log('quantity selected!!')}>
            {/* { (count <= skusArray[styleResultsIndex].qty) {
              if (count > 15) {
                return <option>{count}</option>
              }
            }} */}
            {/* <option>{qty}</option> */}
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
