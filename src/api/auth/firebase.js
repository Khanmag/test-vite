// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2cvO2gtxAIxuz74hjeG8L0FQlUljymdQ",
  authDomain: "test-387d8.firebaseapp.com",
  projectId: "test-387d8",
  storageBucket: "test-387d8.appspot.com",
  messagingSenderId: "991655365596",
  appId: "1:991655365596:web:8ae2b8d77c1ada769d1d19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
