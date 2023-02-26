import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'

export default function GroupLeft() {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <InfoGroupCard/>
    <MyGroup/>
</div>
  )
}
