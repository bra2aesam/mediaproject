import React from 'react'
import InfoCard from '../../InfoCard/InfoCard'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyFriends from '../../MyFriends/MyFriends'
import MyGroup from '../../MyGroup/MyGroup'
const ProfileLeft = ({user, friends, userStatus, isSent, setAny}) => {

  // console.log(user)
  // console.log(friends)
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard user={user} userStatus={userStatus} isSent={isSent} setAny={setAny} />
       <MyFriends friends={friends} />
       <MyGroup/>
   </div>
  )
}

export default ProfileLeft