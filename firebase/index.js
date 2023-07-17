// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIhXcAC3S_tzqifugOLY88JNLBgkJp6A",
  authDomain: "roti-sakinah.firebaseapp.com",
  projectId: "roti-sakinah",
  storageBucket: "roti-sakinah.appspot.com",
  messagingSenderId: "355011375123",
  appId: "1:355011375123:web:60934bce7f6b3646274fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
