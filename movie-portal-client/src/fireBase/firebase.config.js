// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoKf4Bka9alDO4G6oGxd8ncSFUPKmUl2o",
  authDomain: "movie-catalog-34792.firebaseapp.com",
  projectId: "movie-catalog-34792",
  storageBucket: "movie-catalog-34792.firebasestorage.app",
  messagingSenderId: "557213098404",
  appId: "1:557213098404:web:f0e81c1621f9d90bb7e131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth

