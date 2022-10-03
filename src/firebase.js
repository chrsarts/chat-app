import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi9DwdJqrv_eIdtdOMdYGU_dlCYHqdgsY",
  authDomain: "friendlychat-8addf.firebaseapp.com",
  projectId: "friendlychat-8addf",
  storageBucket: "friendlychat-8addf.appspot.com",
  messagingSenderId: "187103984753",
  appId: "1:187103984753:web:daac80fda30d4dcadf6fd0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { app, auth, storage, db };
