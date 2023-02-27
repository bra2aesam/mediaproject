import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { UilEditAlt } from '@iconscout/react-unicons'
import PostModal from '../PostModal/PostModal'


const Post = ({post, img}) => {
  const [modalOpened, setModalOpened] = useState(false);

  // console.log(post, img)
  return (
    <div className="Post">
      {/* add user image */}
      {/* add user user name */}
      <span className='postedit'><b>{post.user_name}</b><UilEditAlt  className="moPo"
            onClick={() => setModalOpened(true)}/>
      <PostModal 
            post={post}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
      </span>
      
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

export default Post