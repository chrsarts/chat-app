import React, { useContext, useState } from "react";
import {
  collection,
  getDocs,
  query,
  setDoc,
  where,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../context/AuthContext";

export default function Search() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", search)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") handleSearch();
  };

  const handleClick = async () => {
    const combinedID =
      currUser.uid > user.uid
        ? currUser.uid + user.uid
        : user.uid + currUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedID));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedID), { messages: [] });

        await updateDoc(doc(db, "userChats", currUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedID + ".userInfo"]: {
            uid: currUser.uid,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setSearch("");
  };
  return (
    <div className="search-container">
      <div className="search">
        <button onClick={handleSearch}>
          <SearchIcon className="search-icon" />
        </button>
        <input
          type="text"
          placeholder="search user"
          onKeyDown={handleKey}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {err && <span>user not found.</span>}
      {user && (
        <div className="search-user" onClick={handleClick}>
          <img src={user.photoURL} alt="" />
          <span>{user.displayName}</span>
        </div>
      )}
    </div>
  );
}
