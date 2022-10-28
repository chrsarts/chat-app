import React from "react";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const nav = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });
        await setDoc(doc(db, "userChats", res.user.uid), {});
        nav("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>friendly chat c:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ab?
          </p>
        </div>
        <div className="login-content">
          <button onClick={signInWithGoogle}>sign in using google</button>
        </div>
      </div>
    </div>
  );
}
