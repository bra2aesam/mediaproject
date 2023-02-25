import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import Comment from "../../img/comment.png";
import "./GroupRight.css";



export default function GroupRight() {
  return (
    <div className="GroupRight">
       <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

     <InfoGroupCard/>
     <FollowersCard/>
</div>
  )
}
