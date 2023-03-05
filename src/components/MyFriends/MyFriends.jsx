import React from "react";
import "./MyFriends.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
import { Link } from "react-router-dom";
const MyFriends = ({friends}) => {
  // console.log(friends)
  return (
    <div className="Trend">
      <div className="TrendCard">
        <h3 className="groupsheder">
        My Friends <UilPlusSquare />
        </h3>
        {/* <hr /> */}
        {friends && friends.map((e, id) => {
          return (
            <div key={id} className="trend">
              <div>
                <img src={e.profile_img ? 'http://localhost/mediaproject/backend/upload/'+e.profile_img: TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{e.user_name}</span>
                  <span>friends</span>
                </div>
              </div>
              {/* <hr /> */}
              <Link style={{textDecoration:'none'}} to={'/profile/'+ e.id} className="button fc-button">Go</Link>
            </div>
          );
        })}
      </div>
<br />
    </div>
  );
};

export default MyFriends;
