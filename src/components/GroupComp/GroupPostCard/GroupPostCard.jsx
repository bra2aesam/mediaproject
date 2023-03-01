import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../../img/coverG.jpg";
import Profile from "../../../img/profileImg.jpg";
import "./GroupPostCard.css";
// import "./Profile/Profile.css";

const GroupPostCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
    <div className="ProfileImages">
      <img src={Cover} alt="" />
    </div>

    <div className="ProfileName">
      <h1>Group Name <hr/></h1>
     
    </div>
  </div>
  );
};

export default GroupPostCard;
