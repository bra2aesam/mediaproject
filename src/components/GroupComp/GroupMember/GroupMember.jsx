import React from "react";
import "./GroupMember.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../../Data/TrendData.js";
const GroupMember = ({group_member}) => {
  return (
    <div className="Trend">
<br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">Group Member </h3>
        {/* <hr /> */}
        {group_member && group_member.map((m, id) => {
          return (
            <div key={m.user_id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{m.user_name}</span>
                  <span>{m.user_status == 1 ? 'member' : 'admin'} </span>
                </div>
              </div>
              <button className="button myc-button">Remove</button>
            </div>
            // <div key={id} className="trend">
            //   <div>
            //     <img src={trend.img} alt="" className="trendImage" />
            //     <div className="gname">
            //       <span>{trend.name}</span>
            //       <span>{trend.shares} member</span>
            //     </div>
            //   </div>
            //   <button className="button myc-button">Join</button>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupMember;
