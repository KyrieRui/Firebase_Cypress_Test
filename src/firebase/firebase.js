// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzaYFS6oyH5Mn984eNEtWLr3MqxwB7LHs",
  authDomain: "raytest-2172b.firebaseapp.com",
  projectId: "raytest-2172b",
  storageBucket: "raytest-2172b.appspot.com",
  messagingSenderId: "604811182622",
  appId: "1:604811182622:web:c5205f1c480007e10de40f",
  measurementId: "G-DXCX2GKBZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
