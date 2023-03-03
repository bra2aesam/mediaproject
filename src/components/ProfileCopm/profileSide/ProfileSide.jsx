import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
import Naviside from '../../Naviside'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = ({yourGroup, setReRender}) => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <MyGroup  yourGroup={yourGroup} setReRender={setReRender}/>
    </div>
  )
}

export default ProfileSide