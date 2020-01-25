import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/projectActions';

const initialState = {
  projects: [
    { id: 1, title: 'hello1', content: 'bla' },
    { id: 2, title: 'hello2', content: 'bla' },
    { id: 3, title: 'hello3', content: 'bla' },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('created project', action.project);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectsReducer;
