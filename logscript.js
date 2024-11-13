// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTRDhb5JDqjKJz7SYL0mO_1FVkEGtfm3Q",
    authDomain: "cc10-3670c.firebaseapp.com",
    projectId: "cc10-3670c",
    storageBucket: "cc10-3670c.appspot.com",
    messagingSenderId: "830759887614",
    appId: "1:830759887614:web:8bc94abc64be12aefdfbaf",
    measurementId: "G-NL1SVC3LBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}

