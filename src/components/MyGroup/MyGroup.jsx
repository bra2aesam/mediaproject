import React, { useState } from "react";
import "./MyGroup.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
import MyGroupModel from "../MyGroupModel/MyGroupModel";
import { Link } from "react-router-dom";
const MyGroup = ({yourGroup}) => {
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
        {yourGroup && yourGroup.map((group, id) => {
          return (
            <div key={id} className="MyGrouptrend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span  >{group.group_name}</span>
                  <span className="MygNUM"> member</span>
                </div>
              </div>
              {/* <hr /> */}
              <Link style={{textDecoration: 'none'}} to={'/group/'+group.id} className="button myc-button">Go</Link>
            </div>
          );
        })}
      </div>
<br />
    </div>
  );
};

export default MyGroup;
