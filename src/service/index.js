// Third part

import axios from "axios";

// base url
const baseUrl = "https://jsonplaceholder.typicode.com";

// creating axios

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json"
  }
});

export default client;
