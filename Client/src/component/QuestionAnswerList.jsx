/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionAnswer from './QuestionAnswer';

const qa = [{
  question: 'Am I a question?',
  answer: 'You are a question',
  user: 'Louisa',
  date: 'August 20, 2019',
},
{
  question: 'Pancakes or Waffles?',
  answer: 'Waffles',
  user: 'Jorge',
  date: 'June 14, 2016',
},
{
  question: 'Orange juice or Apple juice?',
  answer: 'Apple juice',
  user: 'Miko',
  date: 'October 28, 2017',
}];

const QuestionAnswerList = ({ onShowAnswerModal }) => {
  return (
    <div>
      {qa.map((question, index) => <QuestionAnswer question={question} index={index} onShowAnswerModal={onShowAnswerModal} />)}
    </div>
  );
};

QuestionAnswerList.propTypes = {
  onShowAnswerModal: PropTypes.func.isRequired,
};

export default QuestionAnswerList;
