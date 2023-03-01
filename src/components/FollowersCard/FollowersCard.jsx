import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
import UserService from '../../apis/UserService'
import { Link } from 'react-router-dom'
const FollowersCard = ({friendsRequest, setAny}) => {
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
            setAny({lets: true})
          })
    }
  return (
    <div className="FollowersCard">
        <h3 className="myfriend fheder">Friend Requests</h3>

        {friendsRequest && friendsRequest. map((e, id)=>{
            return(

                <div to={'/profile/'+e.id} key={id} className="follower">
                    <div>
                        <img src={Followers[0].img} alt="" className='followerImage' />
                        <Link className="name">
                            <span>{e.user_name}</span>
                            <span>@{e.user_name}</span>
                        </Link>
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