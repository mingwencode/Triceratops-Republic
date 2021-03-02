/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import AddNewQuestion from './AddNewQuestion';
import QuestionAnswerList from './QuestionAnswerList';

const QAndA = (props) => {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  // const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState('');
  const [questionEmailInput, setQuestionEmailInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState('');
  const [answerEmailInput, setAnswerEmailInput] = useState('');

  const addQuestionButtonClick = () => {
    setAddQuestionModal(true);
  };

  const questionInputChange = (e) => {
    setQuestionInput(e.target.value);
  };

  const questionNicknameInputChange = (e) => {
    setQuestionNicknameInput(e.target.value);
  };

  const questionEmailInputChange = (e) => {
    setQuestionEmailInput(e.target.value);
  };

  const showQuestionForm = () => {
    if (addQuestionModal === true) {
      return (
        <div>
          <p>Type your question:</p>
          <textarea value={questionInput} onChange={questionInputChange} />
          <p>Enter your nickname:</p>
          <input placeholder="Example: jackson11!" value={questionNicknameInput} onChange={questionNicknameInputChange} />
          <p>Enter your E-Mail:</p>
          <input placeholder="youremail@address.com”" value={questionEmailInput} onChange={questionEmailInputChange} />
          <button type="button">Submit</button>
        </div>
      );
    }
  };

  const answerInputChange = (e) => {
    setAnswerInput(e.target.value);
  };

  const answerNicknameInputChange = (e) => {
    setAnswerNicknameInput(e.target.value);
  };

  const answerEmailInputChange = (e) => {
    setAnswerEmailInput(e.target.value);
  };

  const onShowAnswerModal = () => {
    console.log('clicked');
    return (
      <div>
        <p>Type your answer:</p>
        <textarea value={answerInput} onChange={answerInputChange} />
        <p>Enter your nickname:</p>
        <input placeholder="Example: jackson11!" value={answerNicknameInput} onChange={answerNicknameInputChange} />
        <p>Enter your E-Mail:</p>
        <input placeholder="youremail@address.com”" value={answerEmailInput} onChange={answerEmailInputChange} />
        <button type="button">Add Pictures</button>
        <button type="button">Submit</button>
      </div>
    );
  };

  return (
    <div>
      <textarea placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <span>
        <QuestionAnswerList onShowAnswerModal={onShowAnswerModal} />
        <button type="button">More Answered Questions</button>
        <AddNewQuestion addQuestionButtonClick={addQuestionButtonClick} addQuestionModal={addQuestionModal} showQuestionForm={showQuestionForm} />
      </span>
    </div>
  );
};

export default QAndA;
