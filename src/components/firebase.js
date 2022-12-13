import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAUeCn2wKegpCITZCXirz42566F3KIOh5Y",
    authDomain: "chat-clone-6d1d8.firebaseapp.com",
    projectId: "chat-clone-6d1d8",
    storageBucket: "chat-clone-6d1d8.appspot.com",
    messagingSenderId: "1085330850585",
    appId: "1:1085330850585:web:b1e79a8a117974de287b88",
  })
  .auth();
