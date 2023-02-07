import axios from 'axios';
import {BASE_URL} from './EndPoint';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'multipart/form-data';

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
