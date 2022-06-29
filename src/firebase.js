import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg1jqlBZ1d8vs7Pugb3tHQvfGuFQRiLfs",
  authDomain: "reels-4c8fd.firebaseapp.com",
  projectId: "reels-4c8fd",
  storageBucket: "reels-4c8fd.appspot.com",
  messagingSenderId: "527986689316",
  appId: "1:527986689316:web:5e1df12a665b4d8ad2dfb1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  posts: firestore.collection("posts"),
  comments: firestore.collection("comments"),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();
