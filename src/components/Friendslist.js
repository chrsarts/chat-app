import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

export default function Friendslist() {
  const [chats, setChats] = useState([]);
  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    if (currUser.uid) getChats();
  }, [currUser.uid]);

  const handleClick = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  //.sort((a, b) => b[1].date - a[1].date)}

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="chat-users"
          key={chat[0]}
          onClick={() => handleClick(chat[1].userInfo)}
        >
          <img className="chat-avatar" src={chat[1].userInfo.photoURL}></img>
          <span>{chat[1].userInfo.displayName}</span>
        </div>
      ))}
    </div>
  );
}
