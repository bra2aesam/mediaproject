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
import { Link, useParams } from "react-router-dom";

const RightSide = ({friendsRequest, userStatus, setAny}) => {
  // console.log(friendsRequest);
  const {id} = useParams()
  const [modalOpened, setModalOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(id == user.id)
  return (
    <div className="RightSide">
      <div className="navIcons">
      <Link to={'/'}>
      <img src={Home} alt="" />
      </Link>
      <Link to={user && `/profile/${user.id}`}>
      <UilSetting />
      </Link>  
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

     {userStatus === 'myProfile' && id == user.id && <FollowersCard friendsRequest={friendsRequest} setAny={setAny} />}
      <GroupForYou />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
