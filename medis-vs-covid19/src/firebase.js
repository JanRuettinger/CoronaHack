import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // NEW
// import 'firebase/storage';
// import 'firebase/message';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // NEW
// export const storage = firebase.storage();
// export const messaging = firebase.messaging();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

// messaging.usePublicVapidKey("BHu_3-U19kvS9Wmpb64oDVtuV5eKcDxF6x7dR-GvqwlPoG8wF3SLiOPAusmq5PIzImWjhpHnN8YkoxkRPL2Y5NQ....moL0ewzQ8rZu");

// firestore.settings({ timestampsInSnapshots: true });

export default firebase;
