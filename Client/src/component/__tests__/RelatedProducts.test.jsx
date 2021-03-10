/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import RelatedProducts from '../RelatedProducts';

describe('Show Realated Product Title', () => {
  test('renders RelatedProducts component', () => {
    render(<RelatedProducts />);
    screen.getByText('RELATED PRODUCTS');
  });
});

describe('Show Your Outfit Title', () => {
  test('renders RelatedProducts component', () => {
    render(<RelatedProducts />);
    screen.getByText('YOUR OUTFIT');
  });
});

// describe('QAndA', () => {
//   test('renders QAndA placeholder text content', () => {
//     render(<QAndA />);
//     screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
//   });
// });

// describe('QAndA', () => {
//   test('renders QAndA alt text content', () => {
//     render(<QAndA />);
//     screen.getByAltText('uploaded by user');
//   });
// });

