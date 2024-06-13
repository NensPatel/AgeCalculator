//Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC9edL8Y1OzeuC6BU6ajOUAa4XuZ5C38s",
  authDomain: "login-w-0511.firebaseapp.com",
  databaseURL: "https://login-w-0511-default-rtdb.firebaseio.com",
  projectId: "login-w-0511",
  storageBucket: "login-w-0511.appspot.com",
  messagingSenderId: "345366133817",
  appId: "1:345366133817:web:df272b85f06341f22721e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
