import axios from 'axios';

const url = process.env.NODE_ENV == 'development' ? 
  'http://localhost:8080' :
  'https://movo-server.herokuapp.com';

export default axios.create({
  baseURL: url
});
