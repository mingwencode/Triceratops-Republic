/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuestionAnswer = ({ question, onShowAnswerModal }) => {
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [report, setReport] = useState('Report');

  const onAddAnswerButtonClick = () => {
    setShowAnswerModal(true);
  };

  const renderAnswerModal = () => {
    if (showAnswerModal === true) {
      return onShowAnswerModal();
    }
  };

  const onReportButtonClick = (e) => {
    e.preventDefault();
    setReport('Reported');
  };

  return (
    <div>
      <span>Q: {question.question} </span>
      <span> Helpful? </span>
      <span> Yes () </span>
      <a onClick={onAddAnswerButtonClick}> | Add an Answer</a>
      <span>{renderAnswerModal()}</span>
      <p>A: {question.answer}</p>
      <span>by {question.user}, {question.date} | Helpful? </span>
      <span> Yes () </span>
      <a onClick={(e) => onReportButtonClick(e)}> {report}</a>
    </div>
  );
};

QuestionAnswer.propTypes = {
  question: PropTypes.objectOf(PropTypes.string).isRequired,
  onShowAnswerModal: PropTypes.func.isRequired,
};

export default QuestionAnswer;
