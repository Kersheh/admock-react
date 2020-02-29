import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import 'src/styles/normalize.css';
import 'src/index.scss';
import 'src/modules/i18n';
// import configureStore from 'src/store/configureStore';
// import { StoreProvider } from 'src/store/StoreContext';

import App from './App';

// <Provider store={configureStore()}>
//   <App/>
// </Provider>

// render(
//   <StoreProvider>
//     <App/>
//   </StoreProvider>,
//   document.getElementById('root')
// );

render(
  <App/>,
  document.getElementById('root')
);
