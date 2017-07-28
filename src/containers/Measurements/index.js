import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasurementsList from 'components/Measurements/MeasurementsList';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { requestData } from './actions';
import { selectData } from './selectors';

class Measurements extends Component {
  render() {
    return <MeasurementsList data={this.props.data} />;
  }
}

Measurements.propTypes = {
  data: PropTypes.object,
  isFetching: PropTypes.bool,
};

const mapStateToProps = createSelector(
  selectData(),
  (
    data
  ) => ({
    data,
  })
);

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchData: () => dispatch(requestData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Measurements);
