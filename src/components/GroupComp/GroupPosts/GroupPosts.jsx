import React from 'react'
import './GroupPosts.css'
import { PostsData } from '../../../Data/PostsData'
import GroupPost from '../GroupPost/GroupPost'

const GroupPosts = ({group_post, setGroupRender}) => {
  // console.log(group_post)
  return (
    <div className="Posts">
        {group_post && group_post.map((post, id)=>{
            return <GroupPost key={id} post={post} img={PostsData[0].img}  id={id} setGroupRender={setGroupRender} />
        })}
    </div>
  )
}

export default GroupPosts