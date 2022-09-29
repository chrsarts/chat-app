import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";

export default function Chatbar() {
  return (
    <div className="chatbar">
      <input type="text" />
      <button className="image-btn">
        <ImageIcon />
      </button>
      <button className="send-btn">
        <SendIcon />
      </button>
    </div>
  );
}
