/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { httpService } from '../axios';

import { TUserInfo } from './types';

const TOKEN_KEY = 'porto-token';

export const addToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY) as string;

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  return (window.location.href = '/');
};

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const validateToken = async (callback?: any): Promise<TUserInfo> => {
  const { data } = await httpService.get(
    `${import.meta.env.VITE_APP_SECURITY_BACKEND_URL}/auth/validate-token`
  );

  const { username, shortname } = data;

  localStorage.setItem('user_info', username);
  callback && callback(username);

  return {
    username,
    shortname,
  };
};

export const logout = async () => {
  await httpService.post(
    `${import.meta.env.VITE_APP_SECURITY_BACKEND_URL}/auth/logout`
  );

  removeToken();
};
