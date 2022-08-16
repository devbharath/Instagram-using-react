import React from "react";
import fp from "../FeedPage.module.css";
import play_store from "../Images/play-store.png";
import instagram_logo from "../Images/insta-logo.png";

function SwitchSuggComp(props) {
  return (
    <div className={fp.switchsugg}>
      <div className={fp.bigprof}>
        <div className={fp.profuname}>
          <div className={fp.profile}>
            <img src={instagram_logo} alt="" />
          </div>
          <div>
            <div className={fp.username}>Bharath7Brad</div>
            <div className={fp.grayname}>Bharath</div>
          </div>
        </div>
        <div className={fp.switch_btn}>Switch</div>
      </div>

      <div className={fp.sugg}>
        <div className={fp.grayname}>Suggestions For You</div>
        <div>See All</div>
      </div>

      {props.userProfiles.slice(0, 5).map((profile) => {
        return (
          <div className={fp.smallprof} key={profile.id}>
            <div className={fp.profuname}>
              <div className={fp.profile}>
                <img src={profile.avatar} alt="" />
              </div>
              <div>
                <div className={fp.username}>{profile.name}</div>
                <div className={fp.grayname}>{profile.name}</div>
              </div>
            </div>
            <div className={fp.switch_btn}>Follow</div>
          </div>
        );
      })}
    </div>
  );
}

export default SwitchSuggComp;
