/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import Question from './Question';

const QuestionAnswerList = ({ onShowAnswerModal, onOpenAnswerModal, questionAnswersShown, qa }) => {
  const newQaArray = [];
  for (let i = 0; i < questionAnswersShown; i += 1) {
    newQaArray.push(qa.results[i]);
  }
  return (
    <div>
      {newQaArray.map((question, index) => <Question question={question} key={index} onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} />)}
    </div>
  );
};

export default QuestionAnswerList;
