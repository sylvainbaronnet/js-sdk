import { combineReducers } from 'redux-immutable';
import measurements from 'containers/Measurements/reducer';

const reducers = combineReducers({
  measurements
});

export default reducers;
