// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCslVguwj8uiiTD5XQFI034AaxKROYKCLM",
  authDomain: "maniflixgpt.firebaseapp.com",
  projectId: "maniflixgpt",
  storageBucket: "maniflixgpt.appspot.com",
  messagingSenderId: "339561046659",
  appId: "1:339561046659:web:d59add5ba55f96263331b6",
  measurementId: "G-SEBEBPF6DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();