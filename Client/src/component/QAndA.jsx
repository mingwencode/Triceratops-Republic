/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components'
import AddNewQuestion from './AddNewQuestion';
import QuestionAnswerList from './QuestionAnswerList';
import QAModal from './QAModal';

const QAndA = ({ currentProductId }) => {
  const [productQuestions, setProductQuestions] = useState();
  const [answers, setAnswers] = useState();
  const [questionInput, setQuestionInput] = useState('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState('');
  const [questionEmailInput, setQuestionEmailInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState('');
  const [answerEmailInput, setAnswerEmailInput] = useState('');
  const [imageUpload, setImageUpload] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [questionAnswersShown, setQuestionAnswersShown] = useState(2);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [questionID, setQuestionID] = useState();

  useEffect(() => {
    getQuestions(currentProductId);
  }, []);

  useEffect(() => {
    getQuestions(currentProductId);
  }, [currentProductId]);

  const clearForm = () => {
    setAnswerInput('');
    setAnswerNicknameInput('');
    setAnswerEmailInput('');
    setImageUpload([]);
    setThumbnail([]);
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

  // API CALLS
  const getQuestions = (id) => {
    axios.get(`/qa/questions/${id}`)
      .then((res) => (
        setProductQuestions(res.data)
      ))
      .catch((err) => console.log('get questions: ', err));
  };

  // const getAnswers = (question_id) => {
  //   axios.get(`/qa/questions/${question_id}/answers`)
  //     .then((res) => (
  //       setAnswers(res.data)
  //     ))
  //     .catch((err) => console.log('get questions: ', err));
  // };

  const postQuestion = (question) => {
    axios.post('/qa/questions', question)
      .then(() => {
        console.log('posting question works!!');
        getQuestions(currentProductId);
      })
      .catch((err) => console.log('post question ', err));
  };

  // const postAnswer = (answer, question_id) => {
  //   axios.post(`/qa/questions/${question_id}/answers`, answer)
  //     .then(() => {
  //       console.log('posting answers works!!');
  //       getQuestions(currentProductId);
  //     })
  //     .catch((err) => console.log('post question ', err));
  // };

  const putQuestionHelpful = (question_id) => {
    axios.put(`/qa/questions/${question_id}/helpful`)
      .then(() => {
        console.log('putQuestionsHelpful works!!');
        getQuestions(currentProductId);
      })
      .catch((err) => console.log('put questions helpful ', err));
  };

  const putQuestionReport = (question_id) => {
    axios.put(`/qa/questions/${question_id}/report`)
      .then(() => {
        console.log('putQuestionsReport works!!');
        getQuestions(currentProductId);
      })
      .catch((err) => console.log('put questions report ', err));
  };

  const putAnswersHelpful = (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/helpful`)
      .then(() => {
        console.log('putAnswersHelpful works!!');
        getQuestions(currentProductId);
      })
      .catch((err) => console.log('put answers helpful ', err));
  };

  const putAnswersReport = (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/report`)
      .then(() => {
        console.log('putAnswersReport works!!');
        getQuestions(currentProductId);
      })
      .catch((err) => console.log('put answers report ', err));
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

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
    imageArray.push(e.target.files[0]);
    setImageUpload(imageArray);

    const thumbnailArray = [];
    for (let i = 0; i < thumbnail.length; i += 1) {
      thumbnailArray.push(thumbnail[i]);
    }
    thumbnailArray.push(URL.createObjectURL(e.target.files[0]));
    setThumbnail(thumbnailArray);
  };

  const onAnswerDismiss = () => {
    setIsAnswerModalOpen(false);
  };

  const onOpenAnswerModal = () => {
    setIsAnswerModalOpen(true);
  };

  const handleAnswerSubmit = (e, email) => {
    e.preventDefault();
    if (!validEmailRegex.test(email)) {
      setError('You must enter email in proper format!');
      return;
    }
    const answerObj = {
      body: answerInput,
      name: answerNicknameInput,
      email: answerEmailInput,
      photos: [],
    };

    const promises = [];

    for (const photo of imageUpload) {
      const payload = {
        name: photo.name,
        data: '',
      };
      const promise = toBase64(photo)
        .then((result) => payload.data = result.split(',')[1])
        .then(() => axios.post('/upload_images', payload))
        .then(({ data }) => { return data; })
        .catch(console.log);
      promises.push(promise);
    }
    Promise.all(promises)
      .then((results) => answerObj.photos = results)
      .then(() => {
        return axios.post(`/qa/questions/${questionID}/answers`, answerObj)
      })
      .then(() => getQuestions(currentProductId))
      .then(() => clearForm())
      .then(() => setIsAnswerModalOpen(false))
      .catch(console.log);
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
        <form onSubmit={(e) => handleAnswerSubmit(e, answerEmailInput)}>
          <p>Type your answer:*</p>
          <textarea
            required="required"
            maxLength="1000"
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
          />
          <p>Enter your nickname:*</p>
          <input
            placeholder="Example: jackson11!"
            required="required"
            maxLength="60"
            value={answerNicknameInput}
            onChange={(e) => setAnswerNicknameInput(e.target.value)}
          />
          <p>For privacy reasons, do not use your full name or email address.</p>
          <p>Enter your E-Mail:*</p>
          <input
            placeholder="youremail@address.com"
            required="required"
            maxLength="60"
            value={answerEmailInput}
            onChange={(e) => setAnswerEmailInput(e.target.value)}
          />
          <p>For authentication reasons, you will not be emailed.</p>
          <p>{showUploadFileButton()}</p>
          {thumbnail.map((image, index) => <img src={image} key={index} alt="uploaded by user" height="50" width="50" />)}
          <br />
          <p>{error}</p>
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

  const handleQuestionSubmit = (e, email) => {
    e.preventDefault();
    if (!validEmailRegex.test(email)) {
      setError('You must enter email in proper format!');
      return;
    }
    const questionObj = {
      body: questionInput,
      name: questionNicknameInput,
      email: questionEmailInput,
      product_id: currentProductId,
    };
    postQuestion(questionObj);
    setIsQuestionModalOpen(false);
  };

  const showMoreQuestionsButton = () => {
    if (productQuestions.results.length > questionAnswersShown) {
      return (
        <button type="button" onClick={(e) => onMoreQuestionsButtonClick(e)}>More Answered Questions</button>
      );
    }
  };

  if (productQuestions) {
    return (
      <div>
        <h2>Questions and Answers</h2>
        <textarea value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <span>
          <QuestionAnswerList onShowAnswerModal={onShowAnswerModal} onOpenAnswerModal={onOpenAnswerModal} productQuestions={productQuestions} questionAnswersShown={questionAnswersShown} searchText={searchText} putQuestionHelpful={putQuestionHelpful} putQuestionReport={putQuestionReport} putAnswersHelpful={putAnswersHelpful} putAnswersReport={putAnswersReport} setQuestionID={setQuestionID} />
          <p>{showMoreQuestionsButton()}</p>
          <AddNewQuestion addQuestionButtonClick={addQuestionButtonClick} />
          <QAModal isOpenModal={isQuestionModalOpen} onDismiss={onQuestionModalDismiss}>
            <form onSubmit={(e) => handleQuestionSubmit(e, questionEmailInput)}>
              <div>
                <label
                  htmlFor="question"
                  title="question"
                  maxLength="1000"
                >
                  Type your Question:*
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
                  Enter your Nickname:*
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
                  Enter your Email:*
                </label>
                <input
                  placeholder="youremail@address.com"
                  required="required"
                  value={questionEmailInput}
                  onChange={(e) => setQuestionEmailInput(e.target.value)}
                />
                <p>For authentication reasons, you will not be emailed.</p>
                <p>{error}</p>
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
  }
  return <div>Loading...</div>;
};

export default QAndA;
