// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfh6O6AhLao4iP0tk5eCRcUbE6m2bY1VE",
  authDomain: "social-media-2b87e.firebaseapp.com",
  projectId: "social-media-2b87e",
  storageBucket: "social-media-2b87e.appspot.com",
  messagingSenderId: "949628443782",
  appId: "1:949628443782:web:8fbf1e8f61e2469895c507",
  measurementId: "G-50PQ2Z885B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;