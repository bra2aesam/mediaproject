import React, { useState } from "react";
import "./InfoGroupCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { UilSignout } from '@iconscout/react-unicons'
import GroupModal from "../GroupModal/GroupModal";

const InfoGroupCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoGroupCard">
      <div className="infoHead Ginfo">
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
        <span>Zendaya MJ</span>
      </div>

      <div className="info">
        <span>
          <b>Admin : </b>
        </span>
        <span>Z. Endeya</span>
      </div>

      <div className="info">
        <span>
          <b>Group Description : </b>
        </span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquam.</span>
      </div>

      <button className="button logout-buttoni"><UilSignout/>Leave Group</button>
    </div>
  );
};

export default InfoGroupCard;
