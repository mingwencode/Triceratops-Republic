const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const axios = require('axios');
const config = require('../config.js');

const token = config.TOKEN;

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/',
  headers: {
    Authorization: token,
  },
};
// OVERVIEW
app.get('/products', (req, res) => {
  axios.get(`${options.url}products`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});

app.get('/products/:id/styles', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}products/${id}/styles`, options)
  .then((datas) => res.send(datas.data))
  .catch((error) => console.log('server styles GET err'));
});

// RATING & REVIEWS
app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  axios.get(`${options.url}reviews/?product_id=${id}`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log('server review GET err'));
});

app.get('/reviews/meta/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}reviews/meta?product_id=${id}`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log('server review meta GET err'));
});

app.post('/reviews', (req, res) => {
  axios.post(`${options.url}reviews`, options)
    .then(() => res.send(201))
    .catch((error) => console.log('server review post err', error.data));
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  axios.put(`${options.url}reviews/${review_id}/helpful`, { body: { review_id: review_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server review helpful PUT err'));
});

app.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  axios.put(`${options.url}reviews/${review_id}/report`, { body: { review_id: review_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server review report PUT err'));
});

// QUESTIONS AND ANSWERS
app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}qa/questions/?product_id=${id}`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const { question_id } = req.params;
  axios.get(`${options.url}qa/questions/${question_id}/answers`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});

app.post('/qa/questions', (req, res) => {
  axios.post(`${options.url}qa/questions`, options)
    .then(() => res.send(201))
    .catch((error) => console.log('server questions POST err', error.data));
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  const { question_id } = req.params;
  axios.post(`${options.url}qa/questions/${question_id}/answers`, options)
    .then(() => res.send(201))
    .catch((error) => console.log('server answers POST err', error.data));
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const { question_id } = req.params;
  axios.put(`${options.url}qa/questions/${question_id}/helpful`, { body: { question_id: question_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server questions helpful PUT err'));
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  axios.put(`${options.url}qa/questions/${question_id}/report`, { body: { question_id: question_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server questions report PUT err'));
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const { answer_id } = req.params;
  axios.put(`${options.url}qa/answers/${answer_id}/helpful`, { body: { answer_id: answer_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server answers PUT err'));
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const { answer_id } = req.params;
  axios.put(`${options.url}qa/answers/${answer_id}/report`, { body: { answer_id: answer_id } }, options)
    .then((datas) => res.send(204))
    .catch((error) => console.log('server answers PUT err'));
});

// RELATED PRODUCTS
app.get('/products/:id/related', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}products/${id}/related`, options)
  .then((datas) => res.send(datas.data))
  .catch((error) => console.log('server review GET err'));
});

app.get('/cart', (req, res) => {
  axios.get(`${options.url}cart`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/20111/related

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
