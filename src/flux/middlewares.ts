import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export default (history: History) => {
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  return middlewares;
};
