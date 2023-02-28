import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import Comment from "../../img/comment.png";
import ShareModal from "../ShareModal/ShareModal";
// import MyGroup from "../MyGroup/MyGroup";
import GroupForYou from "../GroupForYou/GroupForYou";
import FollowersCard from "../FollowersCard/FollowersCard";
import { Link } from "react-router-dom";

const RightSide = ({friendsRequest, userStatus}) => {
  // console.log(friendsRequest);
  const [modalOpened, setModalOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="RightSide">
      <div className="navIcons">
      <Link to={'/'}>
      <img src={Home} alt="" />
      </Link>
      <Link to={`/profile/${user.id}`}>
      <UilSetting />
      </Link>  
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

     {userStatus === 'myProfile' && <FollowersCard friendsRequest={friendsRequest}/>}
      <GroupForYou />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
