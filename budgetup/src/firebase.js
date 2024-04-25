// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjys7l7yxU2E59t-EhVC6oNhhGg6G2PE",
  authDomain: "budgetup-bd585.firebaseapp.com",
  projectId: "budgetup-bd585",
  storageBucket: "budgetup-bd585.appspot.com",
  messagingSenderId: "58545889395",
  appId: "1:58545889395:web:3afecf1b89c6387bc58a06",
  measurementId: "G-5BC53JDXQ1",
  databaseURL: "https://budgetup-bd585-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//const loginFormDB = getDatabase(app);

export const saveLogin = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User created");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User logged in");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export const logout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("User signed out");
  }).catch((error) => {
    // An error happened.
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}