import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = ({timelinePosts, userStatus, setAny}) => {
  // console.log(timelinePosts)
  return (
   <div className="PostSide">
       {userStatus === 'myProfile' && <PostShare setAny={setAny} />}
       <Posts timelinePosts={timelinePosts} userStatus={userStatus} setAny={setAny}/>
   </div>
  )
}

export default PostSide