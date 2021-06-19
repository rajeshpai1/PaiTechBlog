import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "paitechblog.firebaseapp.com",
  databaseURL: "https://paitechblog-default-rtdb.firebaseio.com",
  projectId: "paitechblog",
  storageBucket: "paitechblog.appspot.com",
  messagingSenderId: "104973860482",
  appId: "1:104973860482:web:600e0fc0498cb0fffbfe9b",
  measurementId: "G-V3T9G65C14"
}

function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  
  initFirebase();
  
export default firebase ;