import React from 'react'
import FollowersCard from '../../FollowersCard/FollowersCard'
import LogoSearch from '../../LogoSearch/LogoSearch'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'

export default function GroupLeft() {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <InfoGroupCard/>
    <FollowersCard/>
</div>
  )
}
