import { fromJS } from 'immutable';
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
} from './constants';

const intialState = fromJS({
  data: {},
});

export default function(state = intialState, action) {
  switch (action.type) {
    case REQUEST_DATA: {
      return state.set('isFetching', true);
    }
    case REQUEST_DATA_SUCCESS: {
      return state.merge({
        data: {...state.get('data').toJS(), ...action.data},
        isFetching: false,
      });
    }
    default: {
      return state;
    }
  }
}
