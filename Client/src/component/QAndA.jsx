/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import AddNewQuestion from './AddNewQuestion';
import QuestionAnswerList from './QuestionAnswerList';
import QAModal from './QAModal';

// const qa = [{
//   question: 'Am I a question?',
//   answer: 'You are a question',
//   user: 'Louisa',
//   date: 'August 20, 2019',
// },
// {
//   question: 'Pancakes or Waffles?',
//   answer: 'Waffles',
//   user: 'Jorge',
//   date: 'June 14, 2016',
// },
// {
//   question: 'Orange juice or Apple juice?',
//   answer: 'Apple juice',
//   user: 'Miko',
//   date: 'October 28, 2017',
// },
// {
//   question: 'Is this sweater warm?',
//   answer: 'yes, it is',
//   user: 'Sam',
//   date: 'May 2, 2020',
// },
// {
//   question: 'Is this shirt true to size?',
//   answer: 'It runs a little large',
//   user: 'Gabe',
//   date: 'December 22, 2015',
// },
// {
//   question: 'Are these sunglasses good quality?',
//   answer: 'They do feel very sturdy',
//   user: 'Ming',
//   date: 'March 10, 2019',
// }];

const qa = {
  product_id: '5',
  results: [{
    question_id: 37,
    question_body: 'Why is this product cheaper here than other sites?',
    question_date: '2018-10-18T00:00:00.000Z',
    asker_name: 'williamsmith',
    question_helpfulness: 4,
    reported: false,
    answers: {
      68: {
        id: 68,
        body: 'We are selling it here without any markup from the middleman!',
        date: '2018-08-18T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 4,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  ],
};

const QAndA = () => {
  const [questionInput, setQuestionInput] = useState('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState('');
  const [questionEmailInput, setQuestionEmailInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState('');
  const [answerEmailInput, setAnswerEmailInput] = useState('');
  const [imageUpload, setImageUpload] = useState([]);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [questionAnswersShown, setQuestionAnswersShown] = useState(2);

  const addQuestionButtonClick = () => {
    setIsQuestionModalOpen(true);
  };

  const onMoreQuestionsButtonClick = (e) => {
    e.preventDefault();
    setQuestionAnswersShown(questionAnswersShown + 2);
  };

  const onPhotoUpload = (e) => {
    const imageArray = [];
    for (let i = 0; i < imageUpload.length; i += 1) {
      imageArray.push(imageUpload[i]);
    }
    imageArray.push(URL.createObjectURL(e.target.files[0]));
    setImageUpload(imageArray);
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

  const showUploadFileButton = () => {
    if (imageUpload.length < 5) {
      return (
        <input type="file" name="photo" onChange={onPhotoUpload} />
      );
    }
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
            required="required"
            maxLength="60"
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
          <p>{showUploadFileButton()}</p>
          {imageUpload.map((image, index) => <img src={image} key={index} alt="uploaded by user" height="50" width="50" />)}
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

  const showMoreQuestionsButton = () => {
    if (qa.results.length > questionAnswersShown) {
      return (
        <button type="button" onClick={(e) => onMoreQuestionsButtonClick(e)}>More Answered Questions</button>
      );
    }
  };

  return (
    <div>
      <textarea placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <span>
        <QuestionAnswerList onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} qa={qa} questionAnswersShown={questionAnswersShown} />
        <p>{showMoreQuestionsButton()}</p>
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
