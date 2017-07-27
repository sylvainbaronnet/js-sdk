import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
} from './constants';

export function requestData() {
  return {
    type: REQUEST_DATA,
  };
}

export function requestDataSuccess(data) {
  return {
    data,
    type: REQUEST_DATA_SUCCESS,
  };
}
