import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store, { rrfProps } from './store/store';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
