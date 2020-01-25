import firebase from 'firebase/app';
import { app } from '../../config/fbConfig';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = project => (dispatch, _, { getFirebase }) => {
  const db = firebase.firestore(app);

  db.collection('projects').add({
    ...project,
    authorFirstName: 'Anton',
    authorLastName: 'Vitrenko',
    authorId: 12345,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: CREATE_PROJECT, project })
  }).catch(err => {
    dispatch({ type: CREATE_PROJECT_ERROR, err })
  });
};