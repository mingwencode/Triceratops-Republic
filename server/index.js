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

app.get('/products', (req, res) => {
  axios.get(`${options.url}products`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});

app.get('/reviews', (req, res) => {
  const { id } = req.body;
  axios.get(`${options.url}reviews/?product_id=${id}`, options)
    .then((datas) => res.send(datas.data))
    .catch((error) => console.log(error));
});

app.get('/qa/questions', (req, res) => {
  const { id } = req.body;
  axios.get(`${options.url}qa/questions/?product_id=${id}`, options)
    .then((datas) => console.log(datas.data))
    .catch((error) => console.log(error));
});

app.get('/cart', (req, res) => {
  axios.get(`${options.url}cart`, options)
    .then((datas) => console.log(datas.data))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
