/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import QAModal from '../QAModal';
  

describe('QAModal', () => {
  test('renders button x:', () => {
    render(<QAModal
      isOpenModal={true}
      onDismiss={() => {}}
    />);
    screen.getByTestId('button');
  });
});

describe('QAModal', () => {
    test('doesnt render Modal', () => {
      render(<QAModal
        isOpenModal={false}
        onDismiss={() => {}}
      />);
      const result = screen.queryByTestId('button');
      expect(result).toBeNull();
    });
  });