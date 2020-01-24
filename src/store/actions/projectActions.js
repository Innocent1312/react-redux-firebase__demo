export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = project => dispatch => {
  // connect to server
  dispatch({ type: CREATE_PROJECT, project })
};