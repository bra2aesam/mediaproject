import React from "react";
import "./MyGroup.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
const MyGroup = () => {
  return (
    <div className="Trend">
      <div className="TrendCard">
        <h3 className="groupsheder">
          My Groups <UilPlusSquare />
        </h3>
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
              <button className="button gc-button">Go</button>
            </div>
          );
        })}
      </div>
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

export default MyGroup;
