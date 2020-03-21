import firebase from 'firebase/app';
import 'firebase/firestore'; // NEW

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDJEoPrs8bTOkmKD9zf-ukdi15JpU7FaK0',
  authDomain: 'medis-vs-covid19-fbf77.firebaseapp.com',
  databaseURL: 'https://medis-vs-covid19-fbf77.firebaseio.com',
  projectId: 'medis-vs-covid19-fbf77',
  storageBucket: 'medis-vs-covid19-fbf77.appspot.com',
  messagingSenderId: '801766517522',
  appId: '1:801766517522:web:bbc9addcb73fc1ff6ea1cb',
  measurementId: 'G-674LH940CP'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(); // NEW
export default firebase;
