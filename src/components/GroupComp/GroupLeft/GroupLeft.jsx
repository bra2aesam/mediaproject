import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import MyGroup from '../../MyGroup/MyGroup'
import InfoGroupCard from '../InfoGroupCard/InfoGroupCard'

export default function GroupLeft({group_info, userStatus, isSent, yourGroup, setGroupRender}) {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <InfoGroupCard group_info={group_info} setGroupRender={setGroupRender} userStatus={userStatus} isSent={isSent} />
    <MyGroup yourGroup={yourGroup} setGroupRender={setGroupRender} />
</div>
  )
}
