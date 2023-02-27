import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GroupService from '../../apis/GroupService'
import GroupLeft from '../../components/GroupComp/GroupLeft/GroupLeft'
import GroupPostCard from '../../components/GroupComp/GroupPostCard/GroupPostCard'
import GroupPostSide from '../../components/GroupComp/GroupPostSide/GroupPostSide'
import RightSide from '../../components/RightSide/RightSide'


export default function Group() {
  const navigat=useNavigate()
  const [groupData, setgroupData] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost/mediasocial/backend/group/index.php`).then(res =>{
      console.log(res.data)
      setgroupData(res.data)
  })
      const user =localStorage.getItem("user")
      if(user){
        // // axios.get(`http://localhost/mediasocial/backend/feed/index.php`).then(res =>{
        //   // console.log(res.data)
        //   setFeedata(res.data)
        // })
        GroupService.getSingleGroup(user).then(res =>{
            console.log(res.data)
            // setFeedata(res.data)
          })
      }else{
        navigat("/login")
      }
  },[])

  const { group_post,  group_member } = groupData

  
  return (
      <div className="Profile">
      <GroupLeft/>


        <div className="Profile-center">
          <GroupPostCard/>
        <GroupPostSide group_post={group_post}/>
        
        {/* <PostSide/> */}

        </div>
        
        <RightSide/>
    </div>


  )
}
