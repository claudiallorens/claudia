// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaYzM8ufxHiBIyZh9kKXqM9dI-MOe7aqA",
  authDomain: "proyecto-a79b6.firebaseapp.com",
  projectId: "proyecto-a79b6",
  storageBucket: "proyecto-a79b6.firebasestorage.app",
  messagingSenderId: "704541374734",
  appId: "1:704541374734:web:cd436dc53c98135bb97f5f",
  measurementId: "G-2P5E499DHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
