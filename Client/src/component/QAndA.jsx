/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import AddNewQuestion from './AddNewQuestion';
import QuestionAnswerList from './QuestionAnswerList';
import QAModal from './QAModal';

const QAndA = () => {
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

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setIsAnswerModalOpen(false);
  };

  const onShowAnswerModal = () => {
    return (
      <QAModal isOpenModal={isAnswerModalOpen} onDismiss={onAnswerDismiss}>
        <form onSubmit={handleAnswerSubmit}>
          <p>Type your answer:</p>
          <textarea
            required="required"
            maxLength="1000"
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
          />
          <p>Enter your nickname:</p>
          <input
            placeholder="Example: jackson11!"
            required="required" maxLength="60"
            value={answerNicknameInput}
            onChange={(e) => setAnswerNicknameInput(e.target.value)}
          />
          <p>For privacy reasons, do not use your full name or email address.</p>
          <p>Enter your E-Mail:</p>
          <input
            placeholder="youremail@address.com"
            required="required"
            maxLength="60"
            value={answerEmailInput}
            onChange={(e) => setAnswerEmailInput(e.target.value)}
          />
          <p>For authentication reasons, you will not be emailed.</p>
          <input
            type="file"
            name="photo"
            onChange={onPhotoUpload}
          />
          <img
            src={imageUpload}
            alt="Uploaded by user"
          />
          <br />
          <input
            type="submit"
            name="submit"
          />
        </form>
      </QAModal>
    );
  };

  const onQuestionModalDismiss = () => {
    setIsQuestionModalOpen(false);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleQuestionSubmit}>
            <div>
              <label
                htmlFor="question"
                title="question"
                maxLength="1000"
              >
                Add your Question:
              </label>
              <br />
              <textarea
                required="required"
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
              />
              <br />
              <label
                htmlFor="nickname"
                title="nickname"
                maxLength="60"
              >
                Add your Nickname:
              </label>
              <input
                placeholder="Example: jackson11!"
                required="required"
                value={questionNicknameInput}
                onChange={(e) => setQuestionNicknameInput(e.target.value)}
              />
              <p>For privacy reasons, do not use your full name or email address.</p>
              <label
                htmlFor="email"
                title="email"
                maxLength="60"
              >
                Add your Email:
              </label>
              <input
                placeholder="youremail@address.com"
                required="required"
                value={questionEmailInput}
                onChange={(e) => setQuestionEmailInput(e.target.value)}
              />
              <p>For authentication reasons, you will not be emailed.</p>
              <input
                type="submit"
                name="submit"
              />
            </div>
          </form>
        </QAModal>
      </span>
    </div>
  );
};

export default QAndA;
