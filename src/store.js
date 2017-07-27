import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import MeasurementsSagas from 'containers/Measurements/sagas';
import reducers from 'reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducers,
    fromJS({}),
    composeEnhancers(...enhancers)
  );

  // Saga
  store.runSaga = sagaMiddleware.run;

  // Map global sagas
  MeasurementsSagas.map(store.runSaga);

  return store;
}
