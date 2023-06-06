import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFSnL-3W0HNCvCgmWOmCcNvOJ9C14NVNk",
  authDomain: "streamhub-ac7df.firebaseapp.com",
  projectId: "streamhub-ac7df",
  storageBucket: "streamhub-ac7df.appspot.com",
  messagingSenderId: "785626361143",
  appId: "1:785626361143:web:fadeaae483aea64f1d3eb2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
