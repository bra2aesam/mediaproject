import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = ({timelinePosts, userStatus, setAny}) => {
  // console.log(timelinePosts)
  return (
    <div className="Posts">
        {timelinePosts && timelinePosts.map((post, id)=>{
            return <Post key={id} post={post} img={PostsData[0].img}  id={id} userStatus={userStatus} setAny={setAny} />
        })}
    </div>
  )
}

export default Posts