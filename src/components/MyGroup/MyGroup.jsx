import React, { useState } from "react";
import "./MyGroup.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
import MyGroupModel from "../MyGroupModel/MyGroupModel";
const MyGroup = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="Trend">
      <div className="GTrendCard">
        <h3  className="MyGroup">
          My Groups <div>
            <UilPlusSquare  onClick={() => setModalOpened(true)} />
            <MyGroupModel
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
          </div>
        </h3>
        {/* <hr /> */}
        {TrendData.map((trend, id) => {
          return (
            <div key={id} className="MyGrouptrend">
              <div>
                <img src={trend.img} alt="" className="trendImage" />
                <div className="gname">
                  <span  >{trend.name}</span>
                  <span className="MygNUM">{trend.shares} member</span>
                </div>
              </div>
              {/* <hr /> */}
              <button className="button myc-button">Go</button>
            </div>
          );
        })}
      </div>
<br />
    </div>
  );
};

export default MyGroup;
