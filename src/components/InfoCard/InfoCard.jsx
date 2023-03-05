import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileCopm/ProfileModal.jsx/ProfileModal";
import UserService from "../../apis/UserService";
import { useParams } from "react-router-dom";

const InfoCard = ({user, userStatus, isSent, setAny}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const {id} = useParams()
//  console.log(isSent)
//  console.log(userStatus)
 
  const handleClick = ()=>{
    // if()
    const sendRequest = {
      source_id: JSON.parse(localStorage.getItem('user')).id,
      target_id: id
    }
    // console.log(sendRequest)
    UserService.sendRequest(sendRequest).then(res =>{
      console.log(res.data)
      setAny({sent: "sent"})
    })
  }
  const handleCancel = ()=>{
    // if()
    const sendRequest = {
      source_id: JSON.parse(localStorage.getItem('user')).id,
      target_id: id
    }
    // console.log(sendRequest)
    UserService.cancelRequest(sendRequest).then(res =>{
      console.log(res.data)
      setAny({sent: "cancle"})
    })
  }
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h3 >Your Info</h3>
        <div>
          {userStatus === 'myProfile' && <UilPen width="2rem"height="1.2rem"
            onClick={() => setModalOpened(true)}/>}
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            setAny={setAny}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>name : </b>
        </span>
        <span>{user && user.user_name}</span>
      </div>
        {/* <button onClick={()=>setAny({hello: "hello"})}>refreash</button> */}

      <div className="info">
        <span>
          <b>Email : </b>
        </span>
        <span>{user && user.email}</span>
      </div>

      <div className="info">
      <span>
        <b>Phone : </b>
      </span>
      <span>{user && user.phone}</span>
    </div>
   {isSent === undefined && userStatus == 'notFriend' && <button onClick={handleClick} style={{width: '100%', height: '40px', fontSize:"1.2rem"}} className="button logout-button">send request</button>}
      {isSent !== undefined && userStatus !== 'myProfile' && userStatus !== 'friend' && <button onClick={handleCancel} style={{width: '100%', height: '40px', fontSize:"1.2rem"}} className="button logout-button"> cancel request</button>}
      
    </div>
  );
};

export default InfoCard;
