/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #344B5B;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 10px;
  margin: 5px;
  width: 150px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;

const P = styled.p`
  padding-left: 30px;
`;

const AddNewQuestion = ({ addQuestionButtonClick }) => {
  return (
    <div>
      <P><Button name="add question" type="button" onClick={() => addQuestionButtonClick()}>Add A Question +</Button></P>
    </div>
  );
};

export default AddNewQuestion;
