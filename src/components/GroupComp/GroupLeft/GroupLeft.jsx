import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'

export default function GroupLeft({group_info}) {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <InfoGroupCard group_info={group_info}/>
    <MyGroup/>
</div>
  )
}
