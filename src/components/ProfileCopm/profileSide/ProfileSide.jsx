import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
import Naviside from '../../Naviside'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <MyGroup/>
    </div>
  )
}

export default ProfileSide