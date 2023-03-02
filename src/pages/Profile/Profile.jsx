import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../../apis/UserService'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCopm/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileCopm/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  const [any, setAny] = useState(null)
  // console.log(any)
  const navigat=useNavigate()
  const [timelineData, setTimeLineData] = useState({})
  const [permentData, setPermentData] = useState({})
  const [userStatus, setUserStatus] = useState('notFriend')
  const [isSent , setIsSent] = useState(false)

    const id = useParams()
    // console.log(id)
    // useEffect(()=>{
    //   console.log(id)
    // },[id])
  useEffect(()=>{
    // axios.get(`http://localhost/mediasocial/backend/profile/timeline.php`).then(res =>{
    //   console.log(res.data)
    // })
    console.log(any)
    const userLog = JSON.parse(localStorage.getItem("user"))
    if(userLog){ 
      UserService.getUserDataTimeline(id).then(res =>{
        const requestSent = res.data.friendsRequest?.find(e => e.id == JSON.parse(localStorage.getItem('user')).id) 
        // const requestSent = []
        setIsSent(requestSent)

          console.log(res.data)
          if(!(res.data.user)){
            navigat('/')
          }
          setTimeLineData(res.data)
          const friend = res.data.friends.find(e => e.id == userLog.id)
          if(friend){
            setUserStatus('friend')
          }
          if(id.id == userLog.id){
            setUserStatus('myProfile')
          }
        })
        UserService.suggGroup({id:userLog.id}).then(res =>{
          console.log(res.data)
          setPermentData(res.data)
        })
    }else{
      navigat("/login")
    }
  },[id,any])
// console.log(userStatus)
  const {user, timelinePosts, friends, friendsRequest } = timelineData
  const { yourGroup,  groupForYou,  } = permentData

  return (
    <div className="Profile">
        <ProfileLeft user={user} friends={friends} userStatus={userStatus} isSent={isSent} setAny={setAny} yourGroup={yourGroup} />

        <div className="Profile-center">
            <ProfileCard user={user} timelinePosts={timelinePosts} friends={friends} />
            <PostSide timelinePosts={timelinePosts} userStatus={userStatus} setAny={setAny} />
        </div>

        <RightSide friendsRequest={friendsRequest} userStatus={userStatus} setAny={setAny} groupForYou={groupForYou}/>
    </div>
  )
}

export default Profile