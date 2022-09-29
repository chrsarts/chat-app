import React from "react";
import Friendslist from "./Friendslist";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h3 className="logo">friendly chat c:</h3>
        <div className="user">
          <img
            src="https://i.kym-cdn.com/entries/icons/mobile/000/031/673/hank_died_walt_cries_(breaking_bad_spoilers)_1-35_screenshot.jpg"
            alt=""
          ></img>
          <p>Bruhhj</p>
        </div>
        <button>Logout</button>
      </div>
      <Friendslist />
      <Friendslist />
    </div>
  );
}
