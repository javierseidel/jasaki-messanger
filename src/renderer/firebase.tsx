import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBemx9xvOzaadgWpM1RNdZUd4hXKbocW-E',

  authDomain: 'jasaki-messenger.firebaseapp.com',

  projectId: 'jasaki-messenger',

  storageBucket: 'jasaki-messenger.appspot.com',

  messagingSenderId: '589627603864',

  appId: '1:589627603864:web:35c2dafa3f651a7d52c9ed',
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
