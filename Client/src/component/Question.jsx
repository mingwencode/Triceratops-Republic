/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Answer from './Answer';

const Question = ({ question, onShowAnswerModal, onOpenAnswerModal, questionAnswersShown }) => {
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const { question_body, answers, question_id, question_helpfulness } = question;
  const [isQuestionHelpful, setIsQuestionHelpful] = useState(question_helpfulness);
  const answerArray = Object.values(answers);

  const onAddAnswerButtonClick = () => {
    setShowAnswerModal(true);
    return onOpenAnswerModal();
  };

  const renderAnswerModal = () => {
    if (showAnswerModal === true) {
      return onShowAnswerModal();
    }
  };

  const handleQuestionHelpfulnessClick = () => {
    setIsQuestionHelpful(isQuestionHelpful + 1);
  };

  const newAnswerArray = [];
  for (let i = 0; i < Math.min(questionAnswersShown, answerArray.length); i += 1) {
    newAnswerArray.push(answerArray[i]);
  }

  return (
    <div>
      <span>Q: {question_body} </span>
      <span> Helpful? </span>
      <span onClick={handleQuestionHelpfulnessClick}> Yes ({isQuestionHelpful}) </span>
      <a onClick={onAddAnswerButtonClick}> | Add an Answer</a>
      <span>{renderAnswerModal()}</span>
      <div>
        {newAnswerArray.map((answer, index) => <Answer key={index} answer={answer} />)}
      </div>
    </div>
  );
};

export default Question;
