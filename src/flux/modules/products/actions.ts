import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';

import { ProductsPayload } from './types';

export const getProducts = createAsyncAction(
  'PRODUCT_REQUEST',
  'PRODUCT_SUCCESS',
  'PRODUCT_ERROR'
)<undefined, ProductsPayload, Error | AxiosError>();

export const clearProducts = createAction('CLEAR_PRODUCT')();
