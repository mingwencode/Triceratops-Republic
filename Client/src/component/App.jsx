import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview';
import RatingsAndReviews from './RatingsAndReviews';
import QAndA from './QAndA';
import RelatedProducts from './RelatedProducts';
import styled from 'styled-components';

const appStyle = {
  maxWidth: '1000px',
  margin: 'auto',
  background: 'white',
  padding: '10px'
};

const App = () => {
  const [productArray, setProductArray] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(20112);
  const [productReviewArray, setProductReviewArray] = useState();
  const [productQuestions, setProductQuestions] = useState();
  const [relatedProductIds, setRelatedProductIds] = useState();
  const [reviewMetaData, setReviewMetaData] = useState();
  const [answers, setAnswers] = useState();
  const [productStyles, setProductStyles] = useState();

  useEffect(() => {
    getProducts();
    getReviews(currentProductId);
    getQuestions(currentProductId);
    getRelatedProductIds(currentProductId);
    getReviewsMeta(currentProductId);
    getAnswers(133176); // need to find out what id is
    getProductStyles(currentProductId);
  }, []);
  // OVERVIEW
  const getProducts = () => {
    axios.get('/products')
      .then((res) => (
        setProductArray(res.data)
      ))
      .catch((err) => console.log('initial products ', err));
  };

  const getProductStyles = (id) => {
    axios.get(`/products/${id}/styles`)
      .then((res) => (
        setProductStyles(res.data)
      ))
      .catch(err => console.log('get product styles ', err));
  };

  // RATINGS & REVIEWS
  const getReviews = (id) => {
    axios.get(`/reviews/${id}`)
      .then((res) => (
        setProductReviewArray(res.data)
      ))
      .catch((err) => console.log('get reviews ', err));
  };

  const getReviewsMeta = (id) => {
    axios.get(`/reviews/meta/${id}`)
      .then((res) => (
        setReviewMetaData(res.data)
      ))
      .catch((err) => console.log('get review meta ', err));
  };

  const putReviewHelpful = (review_id) => {
    axios.put(`/reviews/${review_id}/helpful`)
      .then(() => {
        console.log('putReviewHelpful works!!');
        getReviews();
      })
      .catch((err) => console.log('put reviews ', err));
  };

  const putReviewReport = (review_id) => {
    axios.put(`/reviews/${review_id}/report`)
      .then(() => {
        getReviews();
      })
      .catch((err) => console.log('put reviews ', err));
  };

  const postReviews = (review) => {
    axios.post('/reviews', review)
      .then(() => getReviews())
      .catch((err) => console.log('post review ', err));
  };

  // QUESTIONS & ANSWERS
  const getQuestions = (id) => {
    axios.get(`/qa/questions/${id}`)
      .then((res) => (
        setProductQuestions(res.data)
      ))
      .catch((err) => console.log('get questions: ', err));
  };

  const getAnswers = (question_id) => {
    axios.get(`/qa/questions/${question_id}/answers`)
      .then((res) => (
        setAnswers(res.data)
      ))
      .catch((err) => console.log('get questions: ', err));
  };

  const postQuestion = (question) => {
    axios.post('/qa/questions', question)
      .then(() => getQuestions())
      .catch((err) => console.log('post question ', err));
  };

  const postAnswer = (answer, question_id) => {
    axios.post(`/qa/questions/${question_id}/answers`, answer, question_id)
      .then(() => getQuestions())
      .catch((err) => console.log('post question ', err));
  };

  const putQuestionHelpful = (question_id) => {
    axios.put(`/qa/questions/${question_id}/helpful`)
      .then(() => {
        console.log('putQuestionsHelpful works!!');
        getQuestions();
      })
      .catch((err) => console.log('put questions helpful ', err));
  };

  const putQuestionReport = (question_id) => {
    axios.put(`/qa/questions/${question_id}/report`)
      .then(() => {
        console.log('putQuestionsReport works!!');
        getQuestions();
      })
      .catch((err) => console.log('put questions report ', err));
  };

  const putAnswersHelpful = (answer_id) => {
    axios.put(`/qa/questions/${answer_id}/helpful`)
      .then(() => {
        console.log('putAnswersHelpful works!!');
        getAnswers();
      })
      .catch((err) => console.log('put questions helpful ', err));
  };

  const putAnswersReport = (answer_id) => {
    axios.put(`/qa/questions/${answer_id}/report`)
      .then(() => {
        console.log('putAnswersReport works!!');
        getAnswers();
      })
      .catch((err) => console.log('put questions report ', err));
  };

  // RELATED PRODUCTS
  const getRelatedProductIds = (id) => {
    axios.get(`/products/${id}/related`)
      .then((res) => (
        setRelatedProductIds(res.data)
      ))
      .catch(err => console.log('get related product ids ', err));
  };

  if (productReviewArray) {
    return (
      <div>
        <Overview products={productArray} />
        <div style={appStyle}>
          <RelatedProducts />
          <QAndA />
          <RatingsAndReviews
            reviewArray={productReviewArray}
            setReviewArray={productReviewArray}
          />
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default App;
