import React from "react";
import "./GroupForYou.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
import { Link } from "react-router-dom";
const GroupForYou = ({group_member, groupForYou}) => {
  // console.log(group_member)
  // console.log(groupForYou)
  return (
    <div className="Trend">
<br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">suggestion Groups</h3>
        {/* <hr /> */}
        {/* <h2>hello</h2> */}
        {groupForYou && groupForYou.map((m, id) => {
           return ( 
            <div key={id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span> {m.group_name} </span>
                  <span>suggstion</span>
                </div>
              </div>
              <Link to={'/group/'+m.id} className="button fc-button">Go</Link>
            </div>
           ); 
        })} 
      </div>
    </div>
  );
};

export default GroupForYou;


{/* <div key={m.user_id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{m.user_name}</span>
                  <span>{m.user_status == 1 ? 'member' : 'admin'} </span>
                </div>
              </div>
              <button className="button myc-button">Remove</button>
            </div> */}