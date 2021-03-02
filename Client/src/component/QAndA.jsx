/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import AddNewQuestion from './AddNewQuestion';
import QuestionAnswerList from './QuestionAnswerList';
import QAModal from './QAModal';

const QAndA = () => {
  // const [addQuestionModal, setAddQuestionModal] = useState(false);
  // const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState('');
  const [questionEmailInput, setQuestionEmailInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState('');
  const [answerEmailInput, setAnswerEmailInput] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const addQuestionButtonClick = () => {
    setIsQuestionModalOpen(true);
  };

  const onPhotoUpload = (e) => {
    setImageUpload(URL.createObjectURL(e.target.files[0]));
  };

  const onAnswerDismiss = () => {
    setIsAnswerModalOpen(false);
  };

  const onOpenAnswerModal = () => {
    setIsAnswerModalOpen(true);
  };

  const onShowAnswerModal = () => {
    return (
      <QAModal isOpenModal={isAnswerModalOpen} onDismiss={onAnswerDismiss}>
        <p>Type your answer:</p>
        <textarea required="required" maxLength="1000" value={answerInput} onChange={(e) => setAnswerInput(e.target.value)} />
        <p>Enter your nickname:</p>
        <input placeholder="Example: jackson11!" required="required" maxLength="60" value={answerNicknameInput} onChange={(e) => setAnswerNicknameInput(e.target.value)} />
        <p>For privacy reasons, do not use your full name or email address.</p>
        <p>Enter your E-Mail:</p>
        <input placeholder="youremail@address.com" required="required" maxLength="60" value={answerEmailInput} onChange={(e) => setAnswerEmailInput(e.target.value)} />
        <p>For authentication reasons, you will not be emailed.</p>
        <input type="file" name="photo" onChange={onPhotoUpload} />
        <img src={imageUpload} alt="Uploaded by user" />
        <button type="button">Submit</button>
      </QAModal>
    );
  };

  const onQuestionModalDismiss = () => {
    setIsQuestionModalOpen(false);
  };

  return (
    <div>
      <textarea placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <span>
        <QuestionAnswerList onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} />
        <button type="button">More Answered Questions</button>
        <AddNewQuestion addQuestionButtonClick={addQuestionButtonClick} />
        <QAModal isOpenModal={isQuestionModalOpen} onDismiss={onQuestionModalDismiss}>
          <div>
            <p>Type your question:</p>
            <textarea value={questionInput} required="required" maxLength="1000" onChange={(e) => setQuestionInput(e.target.value)} />
            <p>Enter your nickname:</p>
            <input placeholder="Example: jackson11!" required="required" maxLength="60" value={questionNicknameInput} onChange={(e) => setQuestionNicknameInput(e.target.value)} />
            <p>For privacy reasons, do not use your full name or email address.</p>
            <p>Enter your E-Mail:</p>
            <input placeholder="youremail@address.com" required="required" maxLength="60" value={questionEmailInput} onChange={(e) => setQuestionEmailInput(e.target.value)} />
            <p>For authentication reasons, you will not be emailed.</p>
            <button type="button">Submit</button>
          </div>
        </QAModal>
      </span>
    </div>
  );
};

export default QAndA;
