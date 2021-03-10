/**
//  * @jest-environment jsdom
//  */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Question from '../Question';

const question = {
    question_id: 133183,
    question_body: "Aliquam occaecati ipsa tempore omnis tenetur sed.",
    question_date: "2020-11-24T00:00:00.000Z",
    asker_name: "Rodolfo_Kilback62",
    question_helpfulness: 25,
    reported: false,
    answers: {
        1259479: {
          id: 1259479,
          body: "Hic quis odit qui doloremque.",
          date: "2020-06-30T00:00:00.000Z",
          answerer_name: "Tavares71",
          helpfulness: 6,
          photos: []
        }
    }
}


describe('Question', () => {
  test('renders Q:', () => {
    render(<Question
      question={question}
      onShowAnswerModal={false}
      onOpenAnswerModal={false}
      questionAnswersShown={2}
      putQuestionHelpful={() => {}}
      putQuestionReport={() => {}}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
      setQuestionID={() => {}}
    />);
    screen.getByTestId('Q');
  });
});

describe('Question', () => {
  test('renders Helpful?', () => {
    render(<Question
      question={question}
      onShowAnswerModal={false}
      onOpenAnswerModal={false}
      questionAnswersShown={2}
      putQuestionHelpful={() => {}}
      putQuestionReport={() => {}}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
      setQuestionID={() => {}}
    />);
    screen.getByTestId('Helpful');
  });
});

describe('Question', () => {
  test('renders Helpful?', () => {
    render(<Question
      question={question}
      onShowAnswerModal={false}
      onOpenAnswerModal={false}
      questionAnswersShown={2}
      putQuestionHelpful={() => {}}
      putQuestionReport={() => {}}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
      setQuestionID={() => {}}
    />);
    screen.getByTestId('Helpful');
  });
});

describe('Question', () => {
  test('renders button with Add an Answer', () => {
    render(<Question
      question={question}
      onShowAnswerModal={false}
      onOpenAnswerModal={false}
      questionAnswersShown={2}
      putQuestionHelpful={() => {}}
      putQuestionReport={() => {}}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
      setQuestionID={() => {}}
    />);
    screen.getByTestId('Add Answer');
  });
});

describe('Question', () => {
  test('renders report', () => {
    render(<Question
      question={question}
      onShowAnswerModal={false}
      onOpenAnswerModal={false}
      questionAnswersShown={2}
      putQuestionHelpful={() => {}}
      putQuestionReport={() => {}}
      putAnswersHelpful={() => {}}
      putAnswersReport={() => {}}
      setQuestionID={() => {}}
    />);
    screen.getByTestId('report');
  });
});

