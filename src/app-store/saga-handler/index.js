import { all } from 'redux-saga/effects';

import { LOGIN, SIGN_UP } from './auth-saga';
// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    LOGIN(),
    SIGN_UP()
  ]);
};

export default rootSaga;
