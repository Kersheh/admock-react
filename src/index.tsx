import React from 'react';
import { render } from 'react-dom';

import 'src/styles/normalize.css';
import 'src/index.scss';
import 'src/modules/i18n';

import { StoreProvider } from 'src/store/StoreContext';

import App from './App';

render(
  <StoreProvider>
    <App/>
  </StoreProvider>,
  document.getElementById('root')
);
