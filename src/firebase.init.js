// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOTymRKgoORJJVYi0ymL_k6Fj5etP0m-0",
  authDomain: "quizerd-a2884.firebaseapp.com",
  projectId: "quizerd-a2884",
  storageBucket: "quizerd-a2884.appspot.com",
  messagingSenderId: "244767381807",
  appId: "1:244767381807:web:8b17b93fa5336d9892e9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;