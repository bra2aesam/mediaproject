import React from 'react'
// import ".GroupPostSide.css"
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
const GroupPostSide = () => {
  return (
   <div className="PostSide">
       <PostShare/>
       <Posts/>
   </div>
  )
}

export default GroupPostSide