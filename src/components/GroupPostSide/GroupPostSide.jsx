import React from 'react'
import Cover from "../../img/cover.jpg";
import "./GroupPostSide.css"
export default function GroupPostSide() {
  return (

<div className="GroupPostCard">
      <div className="GroupImages">
        <img src={Cover} alt="" />
      </div>

      <div className="GroupName">
        <h1>Zendaya MJ</h1>
        <hr />
      </div>

      <div className="GroupStatus">
        </div>

           
          
      {GroupPostSide ? "" : <span>My Profile</span>}
    </div>
  )
}
