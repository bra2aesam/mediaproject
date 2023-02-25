import React from 'react'
import Groupcard from '../../components/Groupcard/Groupcard'
import GroupLeft from '../../components/GroupLeft/GroupLeft'
import GroupPostSide from '../../components/GroupPostSide/GroupPostSide'
import GroupRight from '../../components/GroupRight/GroupRight'
import PostSide from '../../components/PostSide/PostSide'

export default function Group() {
  return (
      <div className="Profile">
      <GroupLeft/>


        <div className="Profile-center">
        {/* <Groupcard/> */}
        <GroupPostSide/>
        <PostSide/>

        </div>

        <GroupRight/>
    </div>


  )
}
