import { Action, createReducer } from 'typesafe-actions';

import { RequestStatus } from '@/models/iRequest';

import { clearProducts, getProducts } from './actions';
import { IProducts } from './types';

const initialState: IProducts = {
  productsData: { data: null, message: null, status: RequestStatus.idle },
};

const sigInReducer = createReducer<IProducts, Action>(initialState)
  .handleAction(getProducts.request, state => ({
    ...state,
    productsData: { data: null, message: null, status: RequestStatus.fetching },
  }))
  .handleAction(getProducts.success, (state, action) => ({
    ...state,
    productsData: {
      data: action.payload,
      message: null,
      status: RequestStatus.success,
    },
  }))
  .handleAction(getProducts.failure, (state, action) => ({
    ...state,
    productsData: {
      data: null,
      message: action.payload.message,
      status: RequestStatus.error,
    },
  }))
  .handleAction(clearProducts, state => ({
    ...state,
    productsData: {
      data: null,
      message: null,
      status: RequestStatus.idle,
    },
  }));

export default sigInReducer;
