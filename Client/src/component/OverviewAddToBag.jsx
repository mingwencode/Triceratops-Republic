import React, { useState } from 'react';

const OverviewAddToBag = ({ sizes }) => {
  const { sizeSelected, setSize } = useState('');
  const { qty, setQty } = useState(1);
  const sizeList = sizes.map((size, idx) => (
    <option key={idx}>{size}</option>
  ));

  return (
    <div>
      <form>
        <select name="sizes" value="" onChange={() => console.log('size selected!')}>
          {sizeList}
        </select>
        <select>
          <option>{qty}</option>
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
};

export default OverviewAddToBag;
