import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD-PZtYf3vWjxVhbWhTmbB6UifRqaONC8M",
  authDomain: "images-app-e71bb.firebaseapp.com",
  projectId: "images-app-e71bb",
  storageBucket: "images-app-e71bb.appspot.com",
  messagingSenderId: "868625935191",
  appId: "1:868625935191:web:5dc3e73d954da8fe36ec12",
  measurementId: "G-5XGZHR8E0S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
