import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAb55BL-xixk5d6W6ZxyVwsvfT9rRaqIvQ",
  authDomain: "clone-73be0.firebaseapp.com",
  databaseURL: "https://clone-73be0.firebaseio.com",
  projectId: "clone-73be0",
  storageBucket: "clone-73be0.appspot.com",
  messagingSenderId: "530890074654",
  appId: "1:530890074654:web:84105a8b0e1128b7c7dc0f",
  measurementId: "G-WH53B16CWB",
});

const auth = firebase.auth();

export { auth };