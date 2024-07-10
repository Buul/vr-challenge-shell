import { all } from 'redux-saga/effects';

import productsSaga from './modules/products/sagas';

function* rootSaga() {
  yield all([...productsSaga]);
}

export default rootSaga;
