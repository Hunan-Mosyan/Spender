// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDngE7GALMivQhjTdUu_wjXznEvFLZTMgo",
    authDomain: "spender-3b815.firebaseapp.com",
    projectId: "spender-3b815",
    storageBucket: "spender-3b815.firebasestorage.app",
    messagingSenderId: "147240360186",
    appId: "1:147240360186:web:80085d2bb9bae004ed9143",
    measurementId: "G-9DZQ1LRNED"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
