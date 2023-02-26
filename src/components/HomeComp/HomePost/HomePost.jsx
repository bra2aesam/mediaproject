import React from 'react'
import './HomePost.css'
import Comment from '../../../img/comment.png'
import Heart from '../../../img/like.png'
import NotLike from '../../../img/notlike.png'


const HomePost = ({post, img}) => {
  // console.log(post, img)
  return (
    <div className="Post">
      {/* add user image */}
      {/* add user user name */}
      <span><b>{post.user_name}</b></span>
            <span> {post.body}</span>
        <img src={img} alt="" />


        <div className="postReact">
            {/* <img src={data.liked?Heart: NotLike} alt="" /> */}
            <img src={Heart} alt="" />
            <img src={NotLike} alt="" />
            <img src={Comment} alt="" />
            {/* <img src={Share} alt="" /> */}
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}> 45 likes</span>

        <div className="detail">
        </div>
    </div>
  )
}

export default HomePost