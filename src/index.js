import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import Measurements from 'containers/Measurements';
import registerServiceWorker from 'utils/registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <Measurements />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
