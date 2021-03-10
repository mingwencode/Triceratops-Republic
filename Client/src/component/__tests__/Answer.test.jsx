/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Answer from '../Answer';

const answer = {
    id: 1259479,
    body: "Hic quis odit qui doloremque.",
    date: "2020-06-30T00:00:00.000Z",
    answerer_name: "Tavares71",
    helpfulness: 6,
    photos: ["https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"]    
    };

describe('Answer', () => {
  test('renders A:', () => {
    render(<Answer
      answer={answer}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
    />);
    screen.getByTestId('A');
  });
});

describe('Answer', () => {
    test('renders Helpful?', () => {
      render(<Answer
        answer={answer}
        putAnswersHelpful={() => {}}
        putAnswersReport={() => {}}
      />);
      screen.getByTestId('helpful');
    });
  });

describe('Answer', () => {
test('renders Yes', () => {
    render(<Answer
    answer={answer}
    putAnswersHelpful={() => {}}
    putAnswersReport={() => {}}
    />);
    screen.getByTestId('Yes');
});
});
