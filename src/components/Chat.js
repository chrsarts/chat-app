import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Chatbar from "./Chatbar";
import Messages from "./Messages";

export default function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-head">
        <img src={data.user?.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Chatbar />
    </div>
  );
}
