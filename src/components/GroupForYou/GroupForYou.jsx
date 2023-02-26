import React from "react";
import "./GroupForYou.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
const GroupForYou = () => {
  return (
    <div className="Trend">
<br />
      {/* group for you */}
      <div className="TrendCard">
        <h3 className="groupsheder">Group For You </h3>
        <hr />
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
              <button className="button jc-button">Join</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupForYou;
