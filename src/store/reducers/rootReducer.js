import { combineReducers } from 'redux';

import authReducer from './authReducer';
import projectsReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
