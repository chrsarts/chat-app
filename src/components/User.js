import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

export default function User() {
  return (
    <div className="user">
      <div className="user-avatar">
        <img
          src="https://i.kym-cdn.com/entries/icons/mobile/000/031/673/hank_died_walt_cries_(breaking_bad_spoilers)_1-35_screenshot.jpg"
          alt=""
        ></img>
      </div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
