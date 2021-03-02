import React, { useState } from 'react';
import OverviewTopBar from './OverviewTopBar';
import OverviewImageGallery from './OverviewImageGallery';
import OverviewProductInfo from './OverviewProductInfo';
import OverviewAddToBag from './OverviewAddToBag';
import OverviewDescription from './OverviewDescription';

const images = [
  'https://s7d5.scene7.com/is/image/Anthropologie/32869075_025_a?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=1080' ,
  'https://s7d5.scene7.com/is/image/Anthropologie/4130231803171_001_b?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=1080' ,
  'https://cdn-2.jjshouse.com/upimg/s400/14/e8/1d7f95ba39b8185247fae73928c414e8.jpg' ,
  'https://www.lulus.com/images/product/xlarge/4445090_247570.jpg?w=375&hdpi=1' ,
  'https://media.tedbaker.com/t_m_pdp_primary,q_auto:best,f_auto/Product/Womens/242843_BABY-PINK_1'
];
const styles = ['style1', 'style2', 'style3', 'style4'];
const sizes = ['small', 'medium', 'large', 'x-large'];

const Overview = () => {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <OverviewTopBar />
      <OverviewImageGallery images={images} />
      <OverviewProductInfo styles={styles} />
      <OverviewAddToBag sizes={sizes} />
      <OverviewDescription />
    </div>
  );
};

export default Overview;
