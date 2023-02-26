import React from 'react'
import InfoCard from '../../InfoCard/InfoCard'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
       <MyGroup/>
   </div>
  )
}

export default ProfileLeft