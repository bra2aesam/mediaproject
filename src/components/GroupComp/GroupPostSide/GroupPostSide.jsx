import React from 'react'
import "./GroupPostSide.css"
import GroupPosts from '../GroupPosts/GroupPosts.jsx'
import GroupPostShare from '../GroupPostShare/GroupPostShare'
const GroupPostSide = ({group_post, setGroupRender, userStatus}) => {
  return (
      <div>
        {userStatus != 'notMember' && <div className="PostSide">
            <GroupPostShare setGroupRender={setGroupRender}/>
            <GroupPosts group_post={group_post} setGroupRender={setGroupRender}/>
        </div>}
       {userStatus == 'notMember' && <div style={{textAlign: 'center'}}>
       <h1 >no data avaliable</h1>
       <h3 >users aren't member can't see posts</h3>
       </div>}
      </div>
  )
}

export default GroupPostSide