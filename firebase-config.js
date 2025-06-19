// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8oRn6GsVLkiop6mwtlvLJ1vFuEMOiIKg",
  authDomain: "apna-gym-f5033.firebaseapp.com",
  projectId: "apna-gym-f5033",
  storageBucket: "apna-gym-f5033.appspot.com",
  messagingSenderId: "144589871781",
  appId: "1:144589871781:web:47197e784bf6b18a388b4c",
  measurementId: "G-H68R74PD0N"
};

const app = initializeApp(firebaseConfig);  

export const auth = getAuth(app);          
export const db = getFirestore(app);       
