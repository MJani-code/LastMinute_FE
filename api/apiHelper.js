// i need an axios base config and functions like APIPOST APIGET APIPUT APIDELETE

import axios from 'axios';

const config = {
  apiUrl: {
    login: 'http://localhost:5000/THFustike3/build_mate_be/login.php',
    auth: 'http://localhost:5000/THFustike3/build_mate_be/auth.php',
    user: 'http://localhost:5000/THFustike3/build_mate_be/user.php',
    posts: 'http://localhost:5000/THFustike3/build_mate_be/posts.php',
    // Itt további végpontokat adhatsz meg
  },
};

const API = axios.create({
    baseURL: process.env.API_URL ?? 'http://',
    timeout: 3000
    // headers: {'X-Custom-Header': 'foobar'}
});

export const APIPOST = async (endpoint, data) => {
    const url = config.apiUrl[endpoint];
    return await API.post(url, data);
}

export const APIGET = async (endpoint) => {
  const url = config.apiUrl[endpoint];
  return await API.get(url);
}

export const APIPUT = async (url, data) => {
  return await API.put(url, data);
}

export const APIDELETE = async (url) => {
  return await API.delete(url);
}

export const APIUPLOAD = async (url, data) => {
  return await API.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
