import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../../apis/UserService'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCopm/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileCopm/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  const navigat=useNavigate()
  const [timelineData, setTimeLineData] = useState({})
    
  useEffect(()=>{
    // axios.get(`http://localhost/mediasocial/backend/profile/timeline.php`).then(res =>{
    //   console.log(res.data)
    // })
    const user =localStorage.getItem("user")
    if(user){ 
      UserService.getUserDataTimeline(user).then(res =>{
          console.log(res.data)
          setTimeLineData(res.data)
        })
    }else{
      navigat("/login")
    }
  },[])

  const {user, timelinePosts, friends, friendsRequest } = timelineData
  return (
    <div className="Profile">
        <ProfileLeft user={user} friends={friends} />

        <div className="Profile-center">
            <ProfileCard user={user} timelinePosts={timelinePosts} friends={friends} />
            <PostSide timelinePosts={timelinePosts} />
        </div>

        <RightSide friendsRequest={friendsRequest}/>
    </div>
  )
}

export default Profile