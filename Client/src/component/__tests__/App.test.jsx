/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByText('Triceratop Republic');
  });
=======
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
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

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByPlaceholderText('Search');
  });


>>>>>>> 4a1d38d7a9b9358ab061dd2fb4ca4b0f7b23339f
});

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
<<<<<<< HEAD
      screen.getByText('Read all reviews');
  });
});
=======
      screen.getByAltText('logo');
  });


});

describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByRole('button', {name: /New Review/i});
  });


});
describe('App', () => {
  test('renders App component', () => {
      render(<App />);
      screen.getByDisplayValue('Helpful')
  });


});

>>>>>>> 4a1d38d7a9b9358ab061dd2fb4ca4b0f7b23339f

// test('renders the correct content', () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<App />, root);

//   expect(root.querySelector('h1').textContent).toBe('Hello!');
// });