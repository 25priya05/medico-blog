import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcIbIfPLrY0ENlGdQKfrzsJbsC9f7v7us",
  authDomain: "medico-blog.firebaseapp.com",
  projectId: "medico-blog",
  storageBucket: "medico-blog.appspot.com",
  messagingSenderId: "924958973115",
  appId: "1:924958973115:web:8d2018d9fffba9d04f9d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };