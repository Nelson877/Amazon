// import firebase from "firebase";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDG32Yi2TjRBCxtsHzRHlZOBPeTLuzTIqg",
  authDomain: "challenge-a3454.firebaseapp.com",
  projectId: "challenge-a3454",
  storageBucket: "challenge-a3454.appspot.com",
  messagingSenderId: "269502327936",
  appId: "1:269502327936:web:e3b1e01540b74d311c8a65",
  measurementId: "G-35MYLEHTE0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
