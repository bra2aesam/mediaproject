import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../../img/coverG.jpg";
import Profile from "../../../img/profileImg.jpg";
import "./GroupPostCard.css";
// import "./Profile/Profile.css";

const GroupPostCard = ({group_info}) => {
  // console.log(group_info)
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
    <div className="ProfileImages">
      {group_info ? <img src={'http://localhost/mediaproject/backend/upload/'+group_info.group_img} alt="" /> :<img src={Cover} alt="" />}
    </div>

    <div className="ProfileName">
      <h1>{group_info?.group_name && group_info.group_name} <hr/></h1>
     
    </div>
  </div>
  );
};

export default GroupPostCard;
