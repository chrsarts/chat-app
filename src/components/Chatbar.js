import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Chatbar() {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSend = async () => {
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderID: currUser.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderID: currUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currUser.uid), {
      [data.chatID + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatID + ".date"]: serverTimestamp(),
    });

    setImage(null);
    setText("");
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      console.log("here");

      handleSend();
    }
  };

  return (
    <div className="chatbar">
      <input
        type="text"
        placeholder="Aa"
        onKeyDown={handleKey}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="chatbar-btn">
        {/* <label htmlFor="file-upload" className="file-upload-lbl">
          <ImageIcon />
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        <button className="send-btn" onClick={handleSend}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
