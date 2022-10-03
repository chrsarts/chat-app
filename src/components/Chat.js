import React from "react";
import Chatbar from "./Chatbar";
import Messages from "./Messages";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-head">
        <img
          src="https://i.kym-cdn.com/entries/icons/original/000/041/188/Chuck_Has_A_Meltdown_And_Passes_Out___Nailed___Better_Call_Saul_3-55_screenshot.png"
          alt=""
        />
        <p>chuck</p>
      </div>
      <Messages />
      <Chatbar />
    </div>
  );
}
