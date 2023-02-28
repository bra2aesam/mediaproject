import React from "react";
import "./GroupReqMember.css";
// import { UilPlusSquare } from "@iconscout/react-unicons";
// import { UilUserCheck } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

import { TrendData } from "../../Data/TrendData.js";
const GroupReqMember = () => {
  return (
    <div className="Trend">
        <br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">Requested Member</h3>
        {/* <hr /> */}
        {TrendData.map((trend, id) => {
          return (
            <div key={id} className="trend">
              <div>
                <img src={trend.img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{trend.name}</span>
                  <span>{trend.shares} member</span>
                </div>
              </div>
              {/* <hr /> */}
              {/* <button className="button myc-button">
                </button> */}

                <div><UilCheck/><UilTimes/></div>
                
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupReqMember;
