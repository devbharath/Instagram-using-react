import React from "react";
import fp from "../FeedPage.module.css";
import oneone from "../Images/1by1.png";

function StoryComp(props) {
  

  return (
    <div className={fp.storycont}>
      {props.userProfiles.slice(0, 10).map((profile) => {
        return (
          <div key={profile.id}>
            <img src={profile.avatar} alt="story pic" />
            <div className={fp.profilename} style={{width:"50px"}}>{profile.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default StoryComp;
