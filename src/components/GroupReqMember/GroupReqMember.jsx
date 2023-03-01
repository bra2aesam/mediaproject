import React from "react";
import "./GroupReqMember.css";
// import { UilPlusSquare } from "@iconscout/react-unicons";
// import { UilUserCheck } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

import { TrendData } from "../../Data/TrendData.js";
import { useParams } from "react-router-dom";
import GroupService from "../../apis/GroupService";


const GroupReqMember = ({ member_request}) => {
  const {id} = useParams()
  // console.log(member_request)
  const sendRequest = {
    user_id: '',
    group_id: id
  }
  const handelReject = (id)=>{
    console.log('reject')
    sendRequest['user_id'] = id
    // console.log(sendRequest)
      GroupService.rejectRequest(sendRequest).then(res =>{
        console.log(res.data)
      })
  }
  const handelAcceptReq = (id)=>{
    // console.log(id)
      // console.log(sendRequest)
      console.log(id)
      sendRequest['user_id'] = id
      console.log(sendRequest)
      GroupService.acceptRequest(sendRequest).then(res =>{
        console.log(res.data)
      })
  }
  return (
    <div className="Trend">
        <br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">Requested Member</h3>
        {/* <hr /> */}
        { member_request &&  member_request.map((req, id) => {
          return (
            <div key={id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{req.user_name}</span>
                  <span>{req.user_status == 0 && 'pending' }  </span>
                </div>
              </div>
              {/* <hr /> */}
              {/* <button className="button myc-button">
                </button> */}

                <div><button onClick={()=> handelAcceptReq(req.user_id)} style={{border:"none", background:"transparent", cursor:"pointer"}}>
                  <UilCheck/></button> <button onClick={()=> handelReject(req.user_id)} style={{border:"none", background:"transparent", cursor:"pointer"}}><UilTimes/></button></div>
                
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupReqMember;
