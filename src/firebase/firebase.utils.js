import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAaOPBQvWlI0oxbl9_mqMiOzEF7YCAqcX0",
    authDomain: "crwn-db-a929a.firebaseapp.com",
    databaseURL: "https://crwn-db-a929a.firebaseio.com",
    projectId: "crwn-db-a929a",
    storageBucket: "crwn-db-a929a.appspot.com",
    messagingSenderId: "569062710132",
    appId: "1:569062710132:web:1166fac35fe536e2102a21",
    measurementId: "G-X376XZFD8W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export default firebase;