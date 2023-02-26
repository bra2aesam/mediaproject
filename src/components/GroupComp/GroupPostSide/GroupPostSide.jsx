import React from 'react'
// import ".GroupPostSide.css"
import GroupPosts from '../GroupPosts/GroupPosts.jsx'
import GroupPostShare from '../GroupPostShare/GroupPostShare'
const GroupPostSide = ({group_post}) => {
  return (
   <div className="PostSide">
       <GroupPostShare/>
       <GroupPosts group_post={group_post}/>
   </div>
  )
}

export default GroupPostSide