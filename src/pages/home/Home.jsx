import React, { useEffect, useState } from 'react'
import   ProfileSide from   '../../components/ProfileCopm/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
import HomePostSide from '../../components/HomeComp/HomePostSide/HomePostSide'
import axios from 'axios'
const Home = () => {
  const [feedata, setFeedata] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost/mediasocial/backend/feed/index.php`).then(res =>{
      console.log(res.data)
      setFeedata(res.data)
    })
  },[])

  
  return (
    <div className="Home">
        <ProfileSide/>
        <HomePostSide feedata={feedata}/>
        <RightSide/>
    </div>
  )
}

export default Home