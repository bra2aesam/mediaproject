import React, { useEffect, useState } from 'react'
import   ProfileSide from   '../../components/ProfileCopm/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
import HomePostSide from '../../components/HomeComp/HomePostSide/HomePostSide'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserService from '../../apis/UserService'
const Home = () => {
  const navigat=useNavigate()
  const [feedata, setFeedata] = useState(null)
  const [reRender, setReRender] = useState(null)
  useEffect(()=>{
    const user =localStorage.getItem("user")
    if(user){
      // // axios.get(`http://localhost/mediasocial/backend/feed/index.php`).then(res =>{
      //   // console.log(res.data)
      //   setFeedata(res.data)
      // })
      UserService.getUserData(user).then(res =>{
          console.log(res.data)
          const sortedData = res.data.sort((a, b) => b.id - a.id)
          setFeedata(sortedData)
        })
    }else{
      navigat("/login")
    }
  },[reRender])

  
  return (
    <div className="Home">
        <ProfileSide/>
        <HomePostSide feedata={feedata} setReRender={setReRender} />
        <RightSide/>
    </div>
  )
}

export default Home