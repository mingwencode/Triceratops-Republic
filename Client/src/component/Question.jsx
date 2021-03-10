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
  display: grid;
  grid-template-columns: 60% 40%;
`;

const MainQA = styled.div`
  grid-column-start: 1;
  padding-right: 10px;
`;

const RightColumn = styled.div`
  grid-column-start: 2;
`;

const StyledSpanQ = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  padding-right: 8px;
  padding-left: 30px;
  padding-top: 5px;
`;
const StyledSpan = styled(StyledSpanQ)`
  font-size: smaller;
  font-weight: 400;
`;

const StyledSpanHelpful = styled(StyledSpanQ)`
  font-size: smaller;
  font-weight: 400;
  padding-left: 125px;
`;

const StyledA = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding-right: 8px;
  text-decoration: underline;
  font-size: smaller;
  cursor: pointer;
  &:hover {
    color: #344B5B
  }
`;

const StyledButton = styled.button`
  background-color: #344B5B;
  color: white;
  font-family: 'Roboto', sans-serif;
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

  const sortedAnswerArray = answerArray.sort((a, b) => {
    return (a.helpfulness < b.helpfulness) ? 1 : -1;
  });
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
  for (let i = 0; i < Math.min(questionAnswersShown, sortedAnswerArray.length); i += 1) {
    newAnswerArray.push(sortedAnswerArray[i]);
  }

  return (
    <StyledDiv>
      <MainQA>
        <StyledSpanQ data-testid="Q">Q: {question_body} </StyledSpanQ>
        <div>
          {newAnswerArray.map((answer) => <Answer key={answer.id} answer={answer} putAnswersHelpful={putAnswersHelpful} putAnswersReport={putAnswersReport} />)}
        </div>
      </MainQA>
      <RightColumn>
        <StyledSpanHelpful data-testid="Helpful"> Helpful? </StyledSpanHelpful>
        <StyledA onClick={handleQuestionHelpfulnessClick}> Yes ({question_helpfulness}) </StyledA>
        <StyledA data-testid="report" onClick={(e) => onQuestionReportClick(e)}>{' '} Report</StyledA>
        <StyledButton data-testid="Add Answer" onClick={onAddAnswerButtonClick}> Add an Answer</StyledButton>
        <StyledSpan>{renderAnswerModal()}</StyledSpan>
      </RightColumn>
      <hr />
    </StyledDiv>
  );
};

export default Question;
