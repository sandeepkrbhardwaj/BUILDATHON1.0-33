// Firebase configuration module
// Replace the placeholder values below with your project's config
// (Firebase Console -> Project settings -> SDK setup for Web)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
require('dotenv').config({path:'.env'});
const firebaseConfig = {
  apiKey: "AIzaSyCVG9D1I9tvbmF6hSh3E_D14ZwlMPX1wYY",
  authDomain: "skill-syncers.firebaseapp.com",
  projectId: "skill-syncers",
  storageBucket: "skill-syncers.firebasestorage.app",
  messagingSenderId: "682491213470",
  appId: "1:682491213470:web:fef3ae1e42c707ccbfed8f",
  measurementId: "G-V9GWZMM39X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
