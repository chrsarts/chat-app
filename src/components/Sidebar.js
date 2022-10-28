import React from "react";
import Friendslist from "./Friendslist";
import Search from "./Search";
import User from "./User";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h3 className="logo">chats c:</h3>
      </div>
      <Search />
      <Friendslist />
      <footer>
        <User />
      </footer>
    </div>
  );
}
