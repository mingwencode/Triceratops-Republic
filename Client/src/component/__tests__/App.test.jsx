/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByText('Triceratop Republic');
  });
});

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByText('Read all reviews');
  });
});

// test('renders the correct content', () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<App />, root);

//   expect(root.querySelector('h1').textContent).toBe('Hello!');
// });