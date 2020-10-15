import { takeEvery, all } from 'redux-saga/effects';
//allow us to listen to certain actions and do something when they occur
import * as actionTypes from '../actions/actionTypes';

import { logoutSaga, getAccessTokenSaga, authenticationSaga, authenticationCheckStateSaga } from './auth';

export function* watchAuth() {
  yield all([takeEvery(actionTypes.LOGOUT, logoutSaga)]);
  yield all([takeEvery(actionTypes.AUTHENTICATE, authenticationSaga)]);
  yield all([takeEvery(actionTypes.GET_ACCESS_TOKEN, getAccessTokenSaga)]);
  yield all([takeEvery(actionTypes.AUTHENTICATE_CHECK_STATE, authenticationCheckStateSaga)]);
}
