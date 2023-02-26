import React from 'react'
import HomePosts from '../HomePosts/HomePosts'
import HomePostShare from '../HomePostShare/HomePostShare'
import './HomePostSide.css'
const HomePostSide = ({feedata}) => {
  console.log(feedata)
  return (
   <div className="PostSide">
       <HomePostShare/>
       <HomePosts feedata={feedata}/>
   </div>

  )
  
}

export default HomePostSide