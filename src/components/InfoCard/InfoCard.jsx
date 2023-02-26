import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileCopm/ProfileModal.jsx/ProfileModal";

const InfoCard = ({user}) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead Ginfo">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem"height="1.2rem"
            onClick={() => setModalOpened(true)}/>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Phone : </b>
        </span>
        <span>{user && user.phone}</span>
      </div>

      <div className="info">
        <span>
          <b>Email : </b>
        </span>
        <span>{user && user.email}</span>
      </div>

      <div className="info">
      <span>
        <b>Works at </b>
      </span>
      <span>Zainkeepscode inst</span>
    </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
