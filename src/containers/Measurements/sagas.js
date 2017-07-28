import { take, call, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import createSource from 'utils/requestSSE';
import {
  requestData,
  requestDataSuccess,
} from './actions';
import {
  REQUEST_DATA,
  API_URL_BASE,
} from './constants';


function* watchData(msgSource) {
  let response = yield call(msgSource.nextMessage)
  var i = 0;
  while(response && i < 20) {i++;
    let data = {};

    if(response.length > 0) {
      for(const r of response) {
        if(r.measurements.length < 1) continue;

        data[r.name] = {
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
