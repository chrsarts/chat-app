import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
