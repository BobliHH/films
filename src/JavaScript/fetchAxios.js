// import axios from 'axios';
const axios = require('axios');

export { fetchMovies };

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const AUTH_KEY = 'e236468c654efffdf9704cd975a74a96';
const key = require('./key').key;

// async function fetchMovies(perPage) {
//     try {
//         const response = await axios.get(`?key=${AUTH_KEY}`);
//         console.log(response);
//     }
//     catch (error) {
//         console.error(error);
//     }
//   return response;
// }

async function fetchMovies(page,perPage) {
  const response = await axios.get(
    `movie/150?api_key=${AUTH_KEY}&page=${page}&per_page=${perPage}`
  );
  return response;
  console.log(response);
}
fetchMovies();
