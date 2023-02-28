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
  const [groupRender, setGroupRender] = useState(null)
  const id = useParams()
  console.log(id)
  useEffect(()=>{
  //   axios.get(`http://localhost/mediaproject/backend/group/index.php`).then(res =>{
  //     console.log(res.data)
  //     setgroupData(res.data)
  // })
      const user =localStorage.getItem("user")
      if(user){
        // // axios.get(`http://localhost/mediasocial/backend/feed/index.php`).then(res =>{
        //   // console.log(res.data)
        //   setFeedata(res.data)
        // })
        GroupService.getSingleGroup(id).then(res =>{
            console.log(res.data)
            setgroupData(res.data)
          })
      }else{
        navigat("/login")
      }
  },[groupRender])

  const { group_post,  group_member, group_info } = groupData

  
  return (
      <div className="Profile">
      <GroupLeft group_info={group_info} />


        <div className="Profile-center">
          <GroupPostCard/>
        <GroupPostSide group_post={group_post} setGroupRender={setGroupRender}/>
        
        {/* <PostSide/> */}

        </div>
        
        <RightSide/>
    </div>


  )
}
