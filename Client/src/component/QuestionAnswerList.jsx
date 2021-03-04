/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import Question from './Question';

const questionStyles = {
  maxHeight: '500px',
  overflow: 'auto',
};

const QuestionAnswerList = ({ onShowAnswerModal, onOpenAnswerModal, questionAnswersShown, qa, searchText }) => {
  const newQaArray = [];
  if (searchText.length >= 3) {
    const searchArray = [];
    for (let i = 0; i < qa.results.length; i += 1) {
      if (qa.results[i].question_body.includes(searchText)) {
        searchArray.push(qa.results[i]);
      }
    }
    for (let i = 0; i < Math.min(questionAnswersShown, searchArray.length); i += 1) {
      newQaArray.push(searchArray[i]);
    }
  } else {
    for (let i = 0; i < Math.min(questionAnswersShown, qa.results.length); i += 1) {
      newQaArray.push(qa.results[i]);
    }
  }
  return (
    <div style={questionStyles}>
      {newQaArray.map((question, index) => <Question question={question} key={index} onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} />)}
    </div>
  );
};

export default QuestionAnswerList;
