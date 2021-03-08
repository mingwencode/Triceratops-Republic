/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
background-color: #344B5B;
color: white;
font-family: 'Roboto', sans-serif;
padding: 10px;
margin: 5px;
width: 150px;
border: none;
outline: none;
border-radius: 10px;
box-sizing: border-box;
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
