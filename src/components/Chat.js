import React from "react";
import Chatbar from "./Chatbar";
import Messages from "./Messages";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-head">
        <p>Jimbo</p>
      </div>
      <Messages />
      <Chatbar />
    </div>
  );
}
