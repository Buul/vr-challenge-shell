import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProducts } from './actions';
import { getAll } from './service';
import { ProductsResponse } from './types';

function* getProductsSaga(): Generator {
  try {
    const response: ProductsResponse = (yield call(getAll)) as ProductsResponse;
    yield put(getProducts.success(response.data));
  } catch (err) {
    const errors = err as Error | AxiosError;
    yield put(getProducts.failure(errors));
  }
}

export default [takeEvery(getProducts.request, getProductsSaga)];
