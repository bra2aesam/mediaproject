import React, { useState } from "react";
import "./InfoGroupCard.css";
import { UilPen } from "@iconscout/react-unicons";
// import { UilSignout } from '@iconscout/react-unicons'
import GroupModal from "../GroupModal/GroupModal";
import GroupService from "../../../apis/GroupService";
import { useNavigate, useParams } from "react-router-dom";

const InfoGroupCard = ({group_info , userStatus, isSent, setGroupRender}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate()
  const {id} = useParams()
  const sendRequest = {
    user_id: JSON.parse(localStorage.getItem('user')).id,
    group_id: id
  }
  const leaveGroupReq = ()=>{
      GroupService.rejectRequest(sendRequest).then(res =>{
        console.log(res.data)
        setGroupRender({state: 'leave'})
        navigate('/')
      })
  }
  const handelGroupReq = ()=>{
    // const sendRequest = {
    //   user_id: JSON.parse(localStorage.getItem('user')).id,
    //   group_id: id
    // }
    // console.log(sendRequest)
    GroupService.sendRequest(sendRequest).then(res =>{
      console.log(res.data)
      setGroupRender({state: 'send req'})
    })
  }
//  console.log(isSent)
//  console.log(userStatus)
 
  
  return (
    <div className="InfoCard">
      <div className="infoHead ">
        <h3>Group Info</h3>
        <div>
          {userStatus == 'admin' && <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />}
          <GroupModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            setGroupRender={setGroupRender}
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
        <span>Zohde</span>
      </div>

      {/* <div className="info">
        <span>
          <b>Group Description : </b>
        </span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquam.</span>
      </div> */}

      {(userStatus == 'notMember' && !isSent) && <button className="button logout-button" onClick={handelGroupReq}>Join</button>}
      {userStatus == 'member' && <button className="button logout-button" onClick={leaveGroupReq}>Leave</button>}
      {isSent && <button className="button logout-button" onClick={leaveGroupReq}>Cancel Requset</button>}
    </div>
  );
};

export default InfoGroupCard;
