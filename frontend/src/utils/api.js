import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Backend API URL
});

export const getData = () => api.get('/data');
