import firebase from 'firebase/app';

import 'firebase/app';
import 'firebase/auth';        // for authentication
/* import 'firebase/storage';     // for storage */
import 'firebase/database';    // for realtime database
/* import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging */
import 'firebase/functions';   // for cloud functions


var firebaseConfig = {
  apiKey: "",
  authDomain: "test1-66e1a.firebaseapp.com",
  databaseURL: "https://test1-66e1a-default-rtdb.firebaseio.com",
  projectId: "test1-66e1a",
  storageBucket: "test1-66e1a.appspot.com",
  messagingSenderId: "664833469917",
  appId: "1:664833469917:web:d921bfc6b039aae8dfda34",
  measurementId: "G-S4PPMS6P2V"
  };
  // Initialize Firebase
  var fireDB=firebase.initializeApp(firebaseConfig);
  /* var auth=firebase.auth(); */

  export default fireDB.database().ref();