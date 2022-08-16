import React from "react";
import fp from "../FeedPage.module.css";
import insta from "../Images/insta-logo.png";
import * as ri from "react-icons/ri";

const ProfileHeader = () => {
  return (
    <div className={fp.profileheader}>
      <div className={fp.profilepic}>
        <img src={insta} alt="My profile" />
      </div>
      <div className={fp.profilename}>
        <div className={fp.displaynmae}>
          <h1>bharath_7brad</h1>
        </div>
        <div>
          <button>Edit Profile</button>
        </div>
        <div>
          <ri.RiSettings3Line />
        </div>
      </div>
      <div className={fp.profiledetails}>
        <h5>Bharath</h5>
        <p>
          Mysterious x Unpredictable
          <br />
          Ex-Dovetonian ❤️
          <br />
          ✝️❤️ + (Respect every religion 🕉️☪️...)
          <br />
          MMA Athlete @combatkineticsmma
          <br />
          🎯.........🏃🏽‍♂️✨✨...
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
