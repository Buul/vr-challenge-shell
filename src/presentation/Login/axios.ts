/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import axios from 'axios';

import { getToken, removeToken } from './service/index';


export const httpService = axios.create({
  baseURL: 'https://dkvjevm306.execute-api.ca-central-1.amazonaws.com/v100',
});

// create interceptor to add token to requests
httpService.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// create interceptor for 401 responses
httpService.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      removeToken();
    }
    return Promise.reject(error);
  }
);
