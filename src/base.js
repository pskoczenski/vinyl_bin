import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5VuKO5g-_9lQaW9pxw-1wxH9GD0kZ8Pg",
  authDomain: "vinyl-bin.firebaseapp.com",
  databaseURL: "https://vinyl-bin.firebaseio.com",
  projectId: "vinyl-bin",
  storageBucket: "vinyl-bin.appspot.com",
  messagingSenderId: "567342416227",
  appId: "1:567342416227:web:8251dcbbbbc8d8386fd356",
  measurementId: "G-M1VZXH1QMF"
});

const auth = app.auth();
const db = app.firestore();

export { auth, db };