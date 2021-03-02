/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

const AddNewQuestion = ({ addQuestionButtonClick }) => {
  return (
    <div>
      <button type="button" onClick={() => addQuestionButtonClick()}>Add A Question +</button>
    </div>
  );
};

AddNewQuestion.propTypes = {
  addQuestionButtonClick: PropTypes.func.isRequired,
};

export default AddNewQuestion;
