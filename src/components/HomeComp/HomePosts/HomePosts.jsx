import React from 'react'
import './HomePosts.css'
import { PostsData } from '../../../Data/PostsData'
import HomePost from '../HomePost/HomePost'

const HomePosts = ({feedata}) => {
  // console.log(feedata)
  return (
    <div className="Posts">
        {feedata && feedata.map((post, id)=>{
            return <HomePost key={id} post={post} img={PostsData[0].img}  id={id}/>
        })}
    </div>
  )
}

export default HomePosts