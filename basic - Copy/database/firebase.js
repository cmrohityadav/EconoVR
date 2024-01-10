import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCyaiDazZA8uaTJVB_FW-CSR0D6rjZQiug",
    authDomain: "test-33292.firebaseapp.com",
    projectId: "test-33292",
    storageBucket: "test-33292.appspot.com",
    messagingSenderId: "908512263264",
    appId: "1:908512263264:web:bafc409ce026ac7f249705"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;