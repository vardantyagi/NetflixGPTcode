// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcJWTAf9Yr19zVADdKoUyZzcvNeS9fPxY",
  authDomain: "netflixgpt-365ae.firebaseapp.com",
  projectId: "netflixgpt-365ae",
  storageBucket: "netflixgpt-365ae.firebasestorage.app",
  messagingSenderId: "172597662672",
  appId: "1:172597662672:web:d92ee9828aad5b735ddfd5",
  measurementId: "G-RYKJDS9FSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); // we are writing it here because in every authentication , the getAuth() will be used universally

// npm install firebase
// npm install -g firebase-tools
// firebase login
// firebase init
  // >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys => to deploy from local
  // public
  // build
  // npm run build
  // firebase deploy


// steps to deploy webApp

// 0. npm i -g firebase-tools
// firebase login
// firebase init
// firebase deploy