import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className={`message ${message.senderID === currUser.uid && "owner"}`}>
      <div className="message-info">
        <img
          src={
            message.senderID === currUser.uid
              ? currUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}
