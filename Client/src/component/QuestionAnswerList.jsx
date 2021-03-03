/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionAnswer from './QuestionAnswer';

const QuestionAnswerList = ({ onShowAnswerModal, onOpenAnswerModal, questionAnswersShown, qa }) => {
  const newQaArray = [];
  for (let i = 0; i < questionAnswersShown; i += 1) {
    newQaArray.push(qa[i]);
  }
  return (
    <div>
      {newQaArray.map((question, index) => <QuestionAnswer question={question} key={index} onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} />)}
    </div>
  );
};

QuestionAnswerList.propTypes = {
  onShowAnswerModal: PropTypes.func.isRequired,
  onOpenAnswerModal: PropTypes.func.isRequired,
  questionAnswersShown: PropTypes.number.isRequired,
  qa: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionAnswerList;
