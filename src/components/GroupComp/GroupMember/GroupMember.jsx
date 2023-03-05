import React from "react";
import "./GroupMember.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../../Data/TrendData.js";
import GroupService from "../../../apis/GroupService";
import { useParams } from "react-router-dom";
const GroupMember = ({group_member, userStatus, setGroupRender}) => {
  const {id} = useParams()
  // console.log(member_request)
  const sendRequest = {
    user_id: '',
    group_id: id
  }
  const handelRemoveMember = (id)=>{
    console.log('reject')
    sendRequest['user_id'] = id
    // console.log(sendRequest)
      GroupService.rejectRequest(sendRequest).then(res =>{
        console.log(res.data)
        setGroupRender({state: 'remove member'})
      })
  }
  return (
    <div className="Trend">
<br />
      {/* group for you */}
      <div className="forTrendCard">
        <h3 className="gforheder">Group Member </h3>
        {/* <hr /> */}
        {group_member && group_member.map((m, id) => {
          return (
            <div key={m.user_id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{m.user_name}</span>
                  <span>{m.user_status == 1 ? 'member' : 'admin'} </span>
                </div>
              </div>
              {(userStatus == 'admin' && m.user_status == 1) && <button onClick={()=> handelRemoveMember(m.user_id)} className="button fc-button">Remove</button>}
            </div>
            // <div key={id} className="trend">
            //   <div>
            //     <img src={trend.img} alt="" className="trendImage" />
            //     <div className="gname">
            //       <span>{trend.name}</span>
            //       <span>{trend.shares} member</span>
            //     </div>
            //   </div>
            //   <button className="button myc-button">Join</button>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupMember;
