import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

export default function User() {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="user">
      <div className="user-avatar">
        <img src={currUser.photoURL} alt=""></img>
      </div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
