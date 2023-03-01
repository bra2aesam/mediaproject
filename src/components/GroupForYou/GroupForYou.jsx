import React from "react";
import "./GroupForYou.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
const GroupForYou = ({group_member}) => {
  return (
    <div className="Trend">
<br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">Group For You</h3>
        {/* <hr /> */}
        {/* <h2>hello</h2> */}
        {/* {group_member && group_member.map((m, id) => { */}
          {/* return ( */}
            <div className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>group 2</span>
                  <span>group</span>
                </div>
              </div>
              <button className="button fc-button">Remove</button>
            </div>
          {/* ); */}
        {/* })} */}
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