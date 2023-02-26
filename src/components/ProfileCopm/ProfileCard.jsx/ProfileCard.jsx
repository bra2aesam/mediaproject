import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../../img/cover.jpg";
import Profile from "../../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = ({user, timelinePosts, friends}) => {
  // console.log(user);
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
    <div className="ProfileImages">
      <img src={Cover} alt="" />
      <img src={Profile} alt="" />
    </div>

    <div className="ProfileName">
      <span>{user && user.user_name}</span>
      <span>Senior UI/UX Designer</span>
    </div>

    <div className="followStatus">
      <hr />
      <div>
        <div className="follow">
          <span>{friends && friends.length}</span>
          <span>My Friend</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
          <span>1</span>
          <span>My Group</span>
        </div>

        {ProfilePage && (
          <>
            <div className="vl"></div>
            <div className="follow">
              <span>{timelinePosts && timelinePosts.length}</span>
              <span>Posts</span>
            </div>
          </>
        )}
      </div>
      <hr />
    </div>
    {ProfilePage ? "" : <span>My Profile</span>}
  </div>
  );
};

export default ProfileCard;
