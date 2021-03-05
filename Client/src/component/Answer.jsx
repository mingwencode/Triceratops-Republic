/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';

const Answer = ({ answer }) => {
  const { body, answerer_name, date, id, helpfulness, photos } = answer;
  const [report, setReport] = useState('Report');
  const [isHelpful, setIsHelpful] = useState(helpfulness);

  const getProperDate = (longDate) => {
    const dateArray = longDate.slice(0, longDate.indexOf('T')).split('-');
    const year = dateArray.shift();
    dateArray.push(year);
    return dateArray.join('-');
  };

  const onReportButtonClick = (e) => {
    e.preventDefault();
    setReport('Reported');
  };

  const handleHelpfulnessClick = () => {
    setIsHelpful(isHelpful + 1);
  };

  return (
    <div>
      <p>A:
        {' '}
        {body}
      </p>
      <span>
        by
        {answerer_name}
        ,
        {getProperDate(date)}
        {' '}
        |
        {' '}
        Helpful?
        {' '}
      </span>
      <span onClick={handleHelpfulnessClick}>
        Yes
        ({isHelpful})
      </span>
      <span
        onClick={(e) => onReportButtonClick(e)}
      >
        {' '}
        {report}
      </span>
    </div>
  );
};

export default Answer;
