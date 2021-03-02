import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Title = styled.div`
  font-size: 1.5em;
  color: palevioletred;
`;

const Slider = styled.div`
  postition: relative;
  height: 30vh;
  display: flex;
  justify-content: center;
  background: #FED7D7
`;

const products = [
  { name: 'pic1', url: '../public/images/test_related_1.jpg' },
  { name: 'pic2', url: '../public/images/test_related_2.jpg' },
  { name: 'pic3', url: '../public/images/test_related_3.jpg' },
  { name: 'pic4', url: '../public/images/test_related_1.jpg' },
  { name: 'pic5', url: '../public/images/test_related_2.jpg' }];

const RelatedProductsList = (props) => {
  const [current, setCurrent] = useState(0);
  const len = products.length;


  const prevSilde = (e) => {
    console.log('pre' + current);
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  const nextSlide = (e) => {
    console.log('next' + current);
    setCurrent(current === len - 1 ? 0 : current + 1);
  };

  console.log(current)


  return (
    <div className="list_container">
      <Title>RELATED PRODUCTS</Title>
      <button name="prev_btn" type="button" onClick={prevSilde}>Previous</button>
      <Slider>
        {products.map((product, index) => (
          <div key={index}>
            {index === current && (<ProductCard key={product.name} product={product} />)}
          </div>
        ))}
      </Slider>
      <button name="next_btn" type="button" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default RelatedProductsList;
