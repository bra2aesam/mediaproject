import React from 'react'
import HomePosts from '../HomePosts/HomePosts'
import HomePostShare from '../HomePostShare/HomePostShare'
import './HomePostSide.css'
const HomePostSide = ({feedata, setReRender}) => {
  // console.log(feedata)
  return (
   <div className="PostSide">
       <HomePostShare/>
       <HomePosts feedata={feedata} setReRender={setReRender}/>
   </div>

  )
  
}

export default HomePostSide