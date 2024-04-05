// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvluBoKIo2rM1FPZtTWIrfwWqCjfDazEU",
  authDomain: "vohuminiblog.firebaseapp.com",
  projectId: "vohuminiblog",
  storageBucket: "vohuminiblog.appspot.com",
  messagingSenderId: "1012191305835",
  appId: "1:1012191305835:web:cb7e77b04c375c26ed112e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}