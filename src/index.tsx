import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'src/styles/normalize.css';
import 'src/index.scss';
import 'src/modules/i18n';
import configureStore from 'src/store/configureStore';

import App from './App';

render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
