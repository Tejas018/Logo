import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project configuration goes here
};

firebase.initializeApp(firebaseConfig);

export default firebase;