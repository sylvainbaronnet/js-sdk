import { call, put, fork } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import createSource from 'utils/requestSSE';
import {
  requestDataSuccess,
} from './actions';
import {
  API_URL_BASE,
} from './constants';

function* watchData(msgSource) {
  let response = yield call(msgSource.nextMessage)

  while(response) {
    let data = {};

    if(response.length > 0) {
      for(const r of response) {
        if(r.measurements.length < 1) continue;

        data[r.name] = {
          name: r.name,
          measurements: r.measurements,
          unit: r.unit,
          id: r._id,
        };
      }
    }
    yield put(requestDataSuccess(data))
    response = yield call(msgSource.nextMessage)
  }

  // Reload if stream ended
  // yield call(delay, 5 * 1000);
  // yield put(getDataOnLoad());
}

function* getDataOnLoad() {
  const msgSource = yield call(createSource, API_URL_BASE);
  yield fork(watchData, msgSource);
}

export default [
  getDataOnLoad,
];
