import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GroupLeft from '../../components/GroupComp/GroupLeft/GroupLeft'
import GroupPostCard from '../../components/GroupComp/GroupPostCard/GroupPostCard'
import GroupPostSide from '../../components/GroupComp/GroupPostSide/GroupPostSide'
import RightSide from '../../components/RightSide/RightSide'


export default function Group() {
  const [groupData, setgroupData] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost/mediasocial/backend/group/index.php`).then(res =>{
      console.log(res.data)
      setgroupData(res.data)
    })
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
