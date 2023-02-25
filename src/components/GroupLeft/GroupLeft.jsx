import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'
import LogoSearch from '../LogoSearch/LogoSearch'

export default function GroupLeft() {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <InfoGroupCard/>
    <FollowersCard/>
</div>
  )
}
