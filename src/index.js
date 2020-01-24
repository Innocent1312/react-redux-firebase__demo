import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './store/store';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
