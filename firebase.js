// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBXhk2sSBrmW4TEpS5wfM9B-_fhZOpMFw0",
  authDomain: "sawebuse.firebaseapp.com",
  projectId: "sawebuse",
  storageBucket: "sawebuse.appspot.com",
  messagingSenderId: "202136986391",
  appId: "1:202136986391:web:be5273c196951a8d7b8d52",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "websites");

export { db, colRef };
