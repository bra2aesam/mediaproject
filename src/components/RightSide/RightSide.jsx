import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import Comment from "../../img/comment.png";
import ShareModal from "../ShareModal/ShareModal";
import MyGroup from "../MyGroup/MyGroup";
import GroupForYou from "../GroupForYou/GroupForYou";
import FollowersCard from "../FollowersCard/FollowersCard";

const RightSide = ({friendsRequest}) => {
  // console.log(friendsRequest);
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <FollowersCard friendsRequest={friendsRequest}/>
      <GroupForYou />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
