import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import fbConfig from '../config/fbConfig';
import firebase from 'firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument([{ getFirebase }])),
  )
);


export const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
