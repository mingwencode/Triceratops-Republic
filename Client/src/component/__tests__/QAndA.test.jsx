import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import QAndA from '../QAndA';

describe('QAndQ', () => {
  test('renders QAndA component', () => {
    render(<QAndA />);
    screen.getByText('Questions and Answers');
  });
});

describe('App', () => {
  test('renders QAndA placeholder text content', () => {
    render(<QAndA />);
    screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
  });
});

describe('QAndA', () => {
  test('renders QAndA alt text content', () => {
    render(<QAndA />);
    screen.getByAltText('uploaded by user');
  });
});

describe('QAndA', () => {
  test('renders QAndA Button content', () => {
    render(<QAndA />);
    screen.getByRole('button', {name: /Add A Question +/i});
  });
});
