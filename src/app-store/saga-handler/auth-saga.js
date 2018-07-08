import { put, takeEvery, call } from 'redux-saga/effects';
import ApiCaller from '../api-caller';

const LOGIN_API_DATA = payload => {
  return(
  ApiCaller(`login`, 'post', payload).then(response => response)
)};

const SIGNUP_API_DATA = payload => {
  return(
  ApiCaller(`sign-up`, 'post', payload).then(response => response)
)};

export const LOGIN = function* perform_login() {
  yield takeEvery('LOGIN', function* (action) {
    // yield put({ type: 'LOGIN_STARTED' });
    try {
      const DATA = yield call(LOGIN_API_DATA.bind(this, action.payload));
      yield put({ type: 'LOGIN_SUCCESS', payload: DATA });
    } catch (error) {
      yield put({ type: 'LOGIN_FAILED' });
    }
  });
};

export const SIGN_UP = function* perform_signup() {
  yield takeEvery('SIGN_UP', function* (action) {
    // yield put({ type: 'LOGIN_STARTED' });
    try {
      const DATA = yield call(SIGNUP_API_DATA.bind(this, action.payload));
      yield put({ type: 'SIGN_UP_SUCCESS', payload: DATA });
    } catch (error) {
      yield put({ type: 'SIGN_UP_FAILED' });
    }
  });
};