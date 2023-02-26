import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCopm/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileCopm/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  const [timelineData, setTimeLineData] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost/mediasocial/backend/profile/timeline.php`).then(res =>{
      console.log(res.data)
      setTimeLineData(res.data)
    })
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