/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

const StyledDiv = styled.div`
  &:nth-child(odd){
    background-color: #D8E2E9;
  }
`;

const StyledSpanQ = styled.span`
  font-family: 'Shippori Mincho', serif;
  font-weight: bold;
  padding-right: 8px;
`;
const StyledSpan = styled(StyledSpanQ)`
  font-size: smaller;
`;

const StyledSpanBt = styled(StyledSpan)`
  text-decoration: underline;
`;

const StyledButton = styled.button`
  background-color: #344B5B;
  color: white;
  font-family: 'Shippori Mincho', serif;
  font-size: smallest;
  padding: 4px;
  width: fit-content;
  height: 25px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Question = ({ question, onShowAnswerModal, onOpenAnswerModal, questionAnswersShown, putQuestionHelpful, putQuestionReport, putAnswersHelpful, putAnswersReport, setQuestionID }) => {
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const { question_body, answers, question_id, question_helpfulness } = question;
  // const [isQuestionHelpful, setIsQuestionHelpful] = useState(question_helpfulness);
  const answerArray = Object.values(answers);

  // useEffect(() => {
  //   getQuestions(currentProductId);
  // }, [currentProductId]);

  const onAddAnswerButtonClick = () => {
    setShowAnswerModal(true);
    setQuestionID(question_id)
    return onOpenAnswerModal();
  };

  const renderAnswerModal = () => {
    if (showAnswerModal === true) {
      return onShowAnswerModal();
    }
  };

  const handleQuestionHelpfulnessClick = () => {
    // setIsQuestionHelpful(isQuestionHelpful + 1);
    putQuestionHelpful(question_id);
  };

  const onQuestionReportClick = (e) => {
    putQuestionReport(question_id);
  };

  const newAnswerArray = [];
  for (let i = 0; i < Math.min(questionAnswersShown, answerArray.length); i += 1) {
    newAnswerArray.push(answerArray[i]);
  }

  return (
    <StyledDiv>
      <StyledSpanQ>Q: {question_body} </StyledSpanQ>
      <StyledSpan> Helpful? </StyledSpan>
      <StyledSpanBt onClick={handleQuestionHelpfulnessClick}> Yes ({question_helpfulness}) </StyledSpanBt>
      <StyledSpanBt onClick={(e) => onQuestionReportClick(e)}>{' '} Report</StyledSpanBt>
      <StyledButton onClick={onAddAnswerButtonClick}> Add an Answer</StyledButton>
      <StyledSpan>{renderAnswerModal()}</StyledSpan>
      <div>
        {newAnswerArray.map((answer, index) => <Answer key={index} answer={answer} putAnswersHelpful={putAnswersHelpful} putAnswersReport={putAnswersReport} />)}
      </div>
      <hr />
    </StyledDiv>
  );
};

export default Question;
