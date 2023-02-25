import React from 'react'
import { UilIntercom } from '@iconscout/react-unicons'
// import Logo from '../../img/logo.png'
// import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
    <UilIntercom className='Logo'/>
       {/* <img src={Logo} alt="" /> */}
       <div className="Search">
        <div className='sitename'> Site Name   </div>
           {/* <input type="text" placeholder='#Explore' /> */}
           <div className="s-icon">
               {/* <UilSearch/> */}
           </div>
       </div>
   </div>
  )
}

export default LogoSearch