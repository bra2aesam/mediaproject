import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
import UserService from '../../apis/UserService'
const FollowersCard = ({friendsRequest}) => {
    // console.log(friendsRequest);
    const handleAccept = (id)=>{
        // console.log(id)
        const sendRequest = {
            source_id: JSON.parse(localStorage.getItem('user')).id,
            target_id: id
          }
          // console.log(sendRequest)
          UserService.acceptRequest(sendRequest).then(res =>{
            console.log(res.data)
          })
    }
  return (
    <div className="FollowersCard">
        <h3 className="myfriend">Friend Requests</h3>

        {friendsRequest && friendsRequest. map((e, id)=>{
            return(

                <div key={id} className="follower">
                    <div>
                        <img src={Followers[0].img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{e.user_name}</span>
                            <span>@{e.user_name}</span>
                        </div>
                    </div>
                    <button onClick={()=> handleAccept(e.id)} className='button fc-button'>
                        Accept
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard