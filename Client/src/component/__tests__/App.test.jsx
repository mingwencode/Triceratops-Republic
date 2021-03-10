/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen, waitForElement, toBeInTheDocument} from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByText("Loading...");
})});


// describe('App', () => {
//     test('renders App component', () => {
//         render(<App />);
//         screen.getByText('Triceratop Republic');
//     });


// });

// describe('App', () => {
//   test('renders App component', () => {
//       render(<App />);
//       screen.getByText('Read all reviews');
//   });


// });

// describe('App', () => {
//   test('renders App component', () => {
//       render(<App />);
//       screen.getByPlaceholderText('Search');
//   });


// });

// describe('App', () => {
//   test('renders App component', () => {
//       render(<App />);
//       screen.getByAltText('logo');
//   });


// });

// describe('App', () => {
//   test('renders App component', () => {
//       render(<App />);
//       screen.getByRole('button', {name: /New Review/i});
//   });


// });
// describe('App', () => {
//   test('renders App component', () => {
//       render(<App />);
//       screen.getByDisplayValue('Helpful')
//   });


// });


// test('renders the correct content', () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<App />, root);

//   expect(root.querySelector('h1').textContent).toBe('Hello!');
// });