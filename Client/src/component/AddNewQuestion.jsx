/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
    color: rosewood;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rosewood;
    border-radius: 3px;
 `;

const AddNewQuestion = ({ addQuestionButtonClick }) => {
  return (
    <div>
      <Button type="button" onClick={() => addQuestionButtonClick()}>Add A Question +</Button>
    </div>
  );
};

AddNewQuestion.propTypes = {
  addQuestionButtonClick: PropTypes.func.isRequired,
};

export default AddNewQuestion;
