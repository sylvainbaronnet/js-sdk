import { fromJS } from 'immutable';
import {
  REQUEST_DATA,
  SET_DATA,
} from './constants';

const intialState = fromJS({
  data: [],
});

export default function(state = intialState, action) {
  switch (action.type) {
    case REQUEST_DATA: {
      return state.set('isFetching', true);
    }
    case SET_DATA: {
      return state.merge({
        data: action.data,
        isFetching: false,
      });
    }
    default: {
      return state;
    }
  }
}
