import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
const FollowersCard = ({friendsRequest}) => {
    // console.log(friendsRequest);
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
                    <button className='button fc-button'>
                        Accept
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard