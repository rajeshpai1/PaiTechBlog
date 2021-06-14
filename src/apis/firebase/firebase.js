import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    
}

function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  
  initFirebase();
  
export default firebase ;