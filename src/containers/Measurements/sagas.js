import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from 'utils/request';
import {
  requestData,
  requestDataSuccess,
} from './actions';
import {
  REQUEST_DATA,
  API_URL_BASE,
} from './constants';

/**
 * Root saga manages watcher lifecycle
 */
function* watchRequestDataSaga() {
  yield takeLatest(REQUEST_DATA, requestDataSaga);
}

function* requestDataSaga() {

/*
  yield put(requestDataSuccess(
      [],
    ));
*/
}

export default [
  watchRequestDataSaga,
];
