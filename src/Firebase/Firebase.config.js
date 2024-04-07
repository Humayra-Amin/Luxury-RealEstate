// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZKFrvQw1fcIInpixo21bOeqHi-PE6bU",
  authDomain: "a9-luxury-real-estate.firebaseapp.com",
  projectId: "a9-luxury-real-estate",
  storageBucket: "a9-luxury-real-estate.appspot.com",
  messagingSenderId: "599517252457",
  appId: "1:599517252457:web:b0881b5acaf460a5e9cbf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;