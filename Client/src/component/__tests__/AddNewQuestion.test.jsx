/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import AddNewQuestion from '../AddNewQuestion';

describe('AddNewQuestion', () => {
  test('renders button with Add a Question', () => {
    render(<AddNewQuestion addQuestionButtonClick={() => {}} />);
    screen.getByText('Add A Question +');
  });
});