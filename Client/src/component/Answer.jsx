/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  font-family: 'Shippori Mincho', serif;
  padding: 5px;
  font-size: smaller;
`;

const StyledA = styled.a`
  font-family: 'Shippori Mincho', serif;
  font-weight: bold;
  padding-right: 8px;
  text-decoration: underline;
  font-size: smaller;
  &:hover {
    color: #344B5B
  }
`;

const StyledP = styled.p`
font-family: 'Shippori Mincho', serif;
font-weight: bold;
`;

const Answer = ({ answer, putAnswersHelpful, putAnswersReport }) => {
  const { body, answerer_name, date, id, helpfulness, photos } = answer;
  const [report, setReport] = useState('Report');

  const getProperDate = (longDate) => {
    const dateArray = longDate.slice(0, longDate.indexOf('T')).split('-');
    const year = dateArray.shift();
    dateArray.push(year);
    return dateArray.join('-');
  };

  const onReportButtonClick = (e) => {
    e.preventDefault();
    setReport('Reported')
    putAnswersReport(id);
  };

  const handleHelpfulnessClick = () => {
    putAnswersHelpful(id);
  };

  const renderPhotos = () => {
    if (photos.length !== 0) {
      return (
        <p>{photos.map((photo, index) => <img src={photo} key={index} alt="answer posted" height="50" width="50" />)}</p>
      )
    }
  }
  return (
    <div>
      <StyledP>A:
        {' '}
        {body}
      </StyledP>
      {renderPhotos()}
      <StyledSpan>
        by
        {' '}
        {answerer_name}
        ,
      </StyledSpan>
      <StyledSpan>
        {getProperDate(date)}
      </StyledSpan>
      <StyledSpan>
        Helpful?
      </StyledSpan>
      <StyledA onClick={handleHelpfulnessClick}>
        Yes
        ({helpfulness})
      </StyledA>
      <StyledA
        onClick={(e) => onReportButtonClick(e)}
      >
        {' '}
        {report}
      </StyledA>
    </div>
  );
};

export default Answer;
