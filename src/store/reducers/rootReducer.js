import { combineReducers } from 'redux';

import authReducer from './authReducer';
import projectsReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
});

export default rootReducer;
