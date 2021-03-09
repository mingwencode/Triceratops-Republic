import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Overview from '../Overview';

describe('Overview', () => {
  test('renders Overview component', () => {
    render(<Overview />);
    screen.getByText('Style');
  });
});