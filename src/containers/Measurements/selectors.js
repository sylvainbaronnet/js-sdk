import { createSelector } from 'reselect';

/**
 * Direct selector to the measurements state
 */
const selectMeasurements = () => (state) => state.get('measurements');

/**
 * Selector to measurements data
 */
const selectData = () => createSelector(
  selectMeasurements(),
  (substate) => substate.get('data').toJS()
);

export {
  selectData,
};
