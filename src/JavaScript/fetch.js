
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8b218b85545392c9f8705c30fbfd1bce';
const key = require('./key').key;

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/2?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 8b218b85545392c9f8705c30fbfd1bce',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
    
  