import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json"
  }
});

export default client;
