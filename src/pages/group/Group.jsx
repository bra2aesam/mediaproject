import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GroupService from '../../apis/GroupService'
import UserService from '../../apis/UserService'
import GroupLeft from '../../components/GroupComp/GroupLeft/GroupLeft'
import GroupPostCard from '../../components/GroupComp/GroupPostCard/GroupPostCard'
import GroupPostSide from '../../components/GroupComp/GroupPostSide/GroupPostSide'
import GruopRightSide from '../../components/GroupComp/GruopRightSide/GruopRightSide'
import RightSide from '../../components/RightSide/RightSide'
import './Group.css'

export default function Group() {
  const navigat=useNavigate()
  const [groupData, setgroupData] = useState({})
  const [permentData, setPermentData] = useState({})
  const [userStatus, setUserStatus] = useState('notMember')
  const [isSent , setIsSent] = useState(false)
  // const [groupMember, setGroupMember] = useState([])
  const [groupRender, setGroupRender] = useState(null)
  const id = useParams()
  console.log(id)
  useEffect(()=>{
    const userLog = JSON.parse(localStorage.getItem("user"))
    if(userLog){ 
        GroupService.getSingleGroup(id).then(res =>{
          console.log(res.data)
          setgroupData(res.data)
          if(!(res.data.group_info)){
            navigat('/')
          }
          const requestSent = res.data.member_request.find(e => e.user_id == JSON.parse(localStorage.getItem('user')).id)
          console.log(requestSent)
          if(requestSent){
            setIsSent(true)
          }
          const isMember = res.data.group_member.find(e => e.user_id == userLog.id)
          // console.log(isMember.user_status)
          if(isMember && isMember.user_status == 2){
            setUserStatus('admin')
          }else if (isMember) {
            setUserStatus('member')
          } else {
            setUserStatus('notMember')
          }
        })
        UserService.suggGroup({id:userLog.id}).then(res =>{
          console.log(res.data)
          setPermentData(res.data)
        })
    }else{
      navigat("/login")
    }
  },[groupRender,id])
console.log(userStatus)
  const { group_post,  group_member, group_info, member_request } = groupData
  const { yourGroup,  groupForYou,  } = permentData

  
  return (
      <div className="Profile">
      <GroupLeft group_info={group_info} userStatus={userStatus} isSent={isSent} yourGroup={yourGroup} />


        <div className="Profile-center">
          <GroupPostCard  />
          <GroupPostSide group_post={group_post} setGroupRender={setGroupRender} userStatus={userStatus} />
        
        {/* <PostSide/> */}

        </div>
        
        {/* <RightSide group_member={group_member} member_request={member_request}/> */}
        <GruopRightSide group_member={group_member} member_request={member_request} userStatus={userStatus} groupForYou={groupForYou} />
    </div>


  )
}
