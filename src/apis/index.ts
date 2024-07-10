/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';

const request = async (params: AxiosRequestConfig) => {
  const headers: RawAxiosRequestHeaders | AxiosHeaders = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: '*',
  };

  params.headers = headers;

  return axios({
    ...params,
  }).then(
    event => event,
    error => {
      throw error;
    }
  );
};

const getBaseUrl = (baseUrl?: string) =>
  baseUrl || import.meta.env.VITE_APP_WEB_API;

export const get = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: 'GET',
  });

export const post = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: 'POST',
  });

export const put = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: 'PUT',
  });

export const patch = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: 'PATCH',
  });

export const del = (props: AxiosRequestConfig, baseURL?: string) =>
  request({
    baseURL: getBaseUrl(baseURL),
    ...props,
    method: 'DELETE',
  });

export default {
  del,
  get,
  patch,
  post,
  put,
};
