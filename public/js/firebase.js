// Import the functions you need from the SDKs you need



// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAJ5Sr8vK3o13O2y3p87iLZ0bJ9dk1sxp8",
  authDomain: "blogging-website-409dc.firebaseapp.com",
  projectId: "blogging-website-409dc",
  storageBucket: "blogging-website-409dc.appspot.com",
  messagingSenderId: "699294863120",
  appId: "1:699294863120:web:e9152a342d3202b5749f95"
};



firebase.initializeApp(firebaseConfig);

// Initialize Firestore
let db = firebase.firestore();

// Export the db instance for use in other modules



