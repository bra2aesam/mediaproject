import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GroupService from '../../apis/GroupService'
import GroupLeft from '../../components/GroupComp/GroupLeft/GroupLeft'
import GroupPostCard from '../../components/GroupComp/GroupPostCard/GroupPostCard'
import GroupPostSide from '../../components/GroupComp/GroupPostSide/GroupPostSide'
import RightSide from '../../components/RightSide/RightSide'


export default function Group() {
  const navigat=useNavigate()
  const [groupData, setgroupData] = useState({})
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
          const isMember = res.data.group_member.find(e => e.id == userLog.id)
          if(isMember){
            setUserStatus('member')
          }
          // let it for admin
          // if(id.id == userLog.id){
          //   setUserStatus('myProfile')
          // }
        })
    }else{
      navigat("/login")
    }
  },[groupRender])

  const { group_post,  group_member, group_info, member_request } = groupData

  
  return (
      <div className="Profile">
      <GroupLeft group_info={group_info} />


        <div className="Profile-center">
          <GroupPostCard/>
        <GroupPostSide group_post={group_post} setGroupRender={setGroupRender}/>
        
        {/* <PostSide/> */}

        </div>
        
        <RightSide group_member={group_member} member_request={member_request}/>
    </div>


  )
}
