import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = ({timelinePosts}) => {
  // console.log(timelinePosts)
  return (
   <div className="PostSide">
       <PostShare/>
       <Posts timelinePosts={timelinePosts}/>
   </div>
  )
}

export default PostSide