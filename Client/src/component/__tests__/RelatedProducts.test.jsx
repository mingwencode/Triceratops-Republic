/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { render, getByText, waitForElement, screen } from '@testing-library/react';
 import RealatedProducts from '../RelatedProducts';

//  describe('RelatedProducts', () => {
//    test('renders RealatedProducts component', () => {
//      render(<RealatedProducts />);
//      screen.getByText('RELATED PRODUCTS');
//    });
//  });


 it("decrements count delayed", async () => {
  const { getByText } = render(<RealatedProducts />);


  await waitForElement(() => screen.getByText("RELATED PRODUCTS"));
});