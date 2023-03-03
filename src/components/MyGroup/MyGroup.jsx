import React, { useState } from "react";
import "./MyGroup.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
import MyGroupModel from "../MyGroupModel/MyGroupModel";
import { Link } from "react-router-dom";
const MyGroup = ({yourGroup, setGroupRender, setReRender, setAny}) => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="Trend">
      <div className="GTrendCard">
        <h3  className="MyGroup">
          My Groups <div>
            <UilPlusSquare  onClick={() => setModalOpened(true)} />
            <MyGroupModel
            setGroupRender={setGroupRender}
            setReRender={setReRender}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            setAny={setAny}
          />
          </div>
        </h3>
        {/* <hr /> */}
        {yourGroup && yourGroup.map((group, id) => {
          return (
            <div key={id} className="MyGrouptrend">
              <div>
                <img src={group.group_img ? 'http://localhost/mediaproject/backend/upload/'+group.group_img : TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span  >{group.group_name}</span>
                  {group.user_status == 0 && <span className="MygNUM">  sent request</span>}
                  {group.user_status == 1 && <span className="MygNUM">  member</span>}
                  {group.user_status == 2 && <span className="MygNUM">  admin</span>}
                  
                </div>
              </div>
              {/* <hr /> */}
              <Link style={{textDecoration: 'none'}} to={'/group/'+group.group_id} className="button fc-button">Go</Link>
            </div>
          );
        })}
      </div>
<br />
    </div>
  );
};

export default MyGroup;
