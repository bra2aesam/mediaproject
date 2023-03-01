import React, { useState } from "react";
import "./InfoGroupCard.css";
import { UilPen } from "@iconscout/react-unicons";
// import { UilSignout } from '@iconscout/react-unicons'
import GroupModal from "../GroupModal/GroupModal";

const InfoGroupCard = ({group_info}) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead ">
        <h3>Group Info</h3>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <GroupModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Group Name : </b>
        </span>
        <span>{group_info && group_info.group_name}</span>
      </div>

      <div className="info">
        <span>
          <b>Admin : </b>
        </span>
        <span>Mohammed</span>
      </div>

      {/* <div className="info">
        <span>
          <b>Group Description : </b>
        </span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquam.</span>
      </div> */}

      <button className="button logout-button">Join</button>
    </div>
  );
};

export default InfoGroupCard;
