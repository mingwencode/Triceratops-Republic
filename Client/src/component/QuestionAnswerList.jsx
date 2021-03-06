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

const QuestionAnswerList = ({ onShowAnswerModal, onOpenAnswerModal, questionAnswersShown, productQuestions, searchText, putQuestionHelpful, putQuestionReport, putAnswersHelpful, putAnswersReport, setQuestionID }) => {
  const sortedArray = productQuestions.results.sort((a, b) => {
    return (a.question_helpfulness < b.question_helpfulness) ? 1 : -1;
  });
  const newQaArray = [];
  if (searchText.length >= 3) {
    const searchArray = [];
    for (let i = 0; i < sortedArray.length; i += 1) {
      if (sortedArray[i].question_body.includes(searchText)) {
        searchArray.push(sortedArray);
      }
    }
    for (let i = 0; i < Math.min(questionAnswersShown, searchArray.length); i += 1) {
      newQaArray.push(searchArray[i]);
    }
  } else {
    for (let i = 0; i < Math.min(questionAnswersShown, sortedArray.length); i += 1) {
      newQaArray.push(sortedArray[i]);
    }
  }
  return (
    <div style={questionStyles}>
      {newQaArray.map((question, index) => <Question question={question} key={index} onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} questionAnswersShown={questionAnswersShown} putQuestionHelpful={putQuestionHelpful} putQuestionReport={putQuestionReport} putAnswersHelpful={putAnswersHelpful} putAnswersReport={putAnswersReport} setQuestionID={setQuestionID} />)}
    </div>
  );
};

export default QuestionAnswerList;
