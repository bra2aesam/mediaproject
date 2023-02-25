import React from 'react'
import GroupLeft from '../../components/GroupComp/GroupLeft/GroupLeft'
import GroupPostCard from '../../components/GroupComp/GroupPostCard/GroupPostCard'
import GroupPostSide from '../../components/GroupComp/GroupPostSide/GroupPostSide'
import IconHome from '../../components/IconHome/IconHome'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import TrendCard from '../../components/TrendCard/TrendCard'


export default function Group() {
  return (
      <div className="Profile">
      <GroupLeft/>


        <div className="Profile-center">
          <GroupPostCard/>
        <GroupPostSide/>
        
        {/* <PostSide/> */}

        </div>
        
        <RightSide/>
    </div>


  )
}
