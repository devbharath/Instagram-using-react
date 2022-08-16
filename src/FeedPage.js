import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import axios from "axios";
import SwitchSuggComp from "./Components/SwitchSuggComp";
import fp from "./FeedPage.module.css";
import PostComp from "./Components/PostComp";
import StoryComp from "./Components/StoryComp";

function FeedPage(props) {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState({});
  const [comm, setComm] = useState({});
  const [saved, setSaved] = useState({});
  const [locSave, setLocSave] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    axios
      .get("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((response) => {
        setUserProfiles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    if (localStorage.getItem("profile1")) {
      let dataFromLocSto = JSON.parse(localStorage.getItem("profile1"));
      setLiked(dataFromLocSto.likes)
      setSaved(dataFromLocSto.saves);
      setComm(dataFromLocSto.comms);
      console.log(comm);
    }
  }, []);

  useEffect(() => {
    if (firstTime) {
      let datatostore;
      datatostore = { saves: saved, comms: comm,likes:liked };
      localStorage.setItem("profile1", JSON.stringify(datatostore));
      console.log(datatostore);
    }
  }, [locSave]);

  console.log(comm);
  return (
    <div className={fp.feed_body}>
      <NavBar saved={saved} />
      <div>
        <div className={fp.postholder}>
          {loading ? null : <StoryComp userProfiles={userProfiles} />}

          {loading ? (
            <div className={fp.loading}>Loading...</div>
          ) : (
            userProfiles.map((user, index) => {
              return (
                <PostComp
                  setFirstTime={setFirstTime}
                  setLocSave={setLocSave}
                  locSave={locSave}
                  liked={liked}
                  setLiked={setLiked}
                  saved={saved}
                  setSaved={setSaved}
                  comm={comm}
                  index={index}
                  setComm={setComm}
                  userProfiles={userProfiles}
                  user={user}
                  key={user.id}
                />
              );
            })
          )}
        </div>
        {loading ? null : <SwitchSuggComp userProfiles={userProfiles} />}
      </div>
    </div>
  );
}

export default FeedPage;
