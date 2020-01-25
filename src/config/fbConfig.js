import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfVhdmeydyvAHIdOAL_6w980_U_QDJQzo",
  authDomain: "project-m-system.firebaseapp.com",
  databaseURL: "https://project-m-system.firebaseio.com",
  projectId: "project-m-system",
  storageBucket: "project-m-system.appspot.com",
  messagingSenderId: "123968983297",
  appId: "1:123968983297:web:2e6bcdfe10a5cbd4064b00",
  measurementId: "G-90YH95S1M5"
};

export const app = firebase.initializeApp(firebaseConfig);
export default firebase;