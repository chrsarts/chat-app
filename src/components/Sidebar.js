import React from "react";
import Friendslist from "./Friendslist";
import User from "./User";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h3 className="logo">chats c:</h3>
      </div>
      <Friendslist />
      <Friendslist />
      <footer>
        <User />
      </footer>
    </div>
  );
}
