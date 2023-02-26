import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import UserService from '../../apis/UserService';
import {  NavLink, useNavigate } from "react-router-dom";


export default function SignUp() {
  const [errorfname,setErrorsfname]=useState(false)
  // const [errorlname,setErrorslname]=useState(false)
  const [erroremail,setErrorsemail]=useState(false)
  const [errorpassword,setErrorspassword]=useState(false)
  const [errorconpassword,setErrorsconpassword]=useState(false)

  const [errornamemsg,seterrornamemsg]=useState("")
  const [erroremailmsg,setErrorsemailmsg]=useState("")
  const [errorpasswordmsg,setErrorspasswordmsg]=useState("")
  const [errorconpasswordmsg,setErrorsconpasswordmsg]=useState("")
  const [accept,setAccept]=useState(false)
  const navigate = useNavigate();


  const [data , setdata] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPssword : "",
  });
  const handlechange = (e) => {
    setdata(prev=>({...prev,[e.target.name]:e.target.value}))
    const name=e.target.name;
    const value=e.target.value;
    const namereg = "^[a-zA-Z]{1,15}$"; 
    const passreg = "^.{8,}$";
    const emailreg = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
    console.log(value);
    console.log(errorfname   , erroremail , errorpassword , errorconpassword)

    switch (name) {
      // case 'lastName':
      // if (! (value.match(namereg))){
      //   seterrornamemsg ('Name must contain just letters !')
      //   setErrorslname(false)}
      // else {setErrorslname(true);
      //   seterrornamemsg ('')
      // }
      // break;
      case 'user_name':
      if (! (value.match(namereg))){
        seterrornamemsg ('Name must contain just letters !')
        setErrorsfname(false)}
      else {setErrorsfname(true);
        seterrornamemsg ('')
      }
      break;
      case 'email': 
      if (! (value.match(emailreg))){
        setErrorsemailmsg('Wrong email !')
        setErrorsemail(false)}
        else {setErrorsemail(true);
          setErrorsemailmsg('')
        }
              break;
              case 'password': 
              if (! (value.match(passreg))){
                setErrorspasswordmsg('weak password make it stronger !')
                setErrorspassword(false);
              }else { setErrorspassword(true);
                setErrorspasswordmsg('')
              }
              break;
              case 'confirmPssword': 
              if (! (data.password === value)){
                setErrorsconpasswordmsg('Password don\'t match !');
                setErrorsconpassword(false);
              }else { setErrorsconpassword(true);
                setErrorsconpasswordmsg('');
              }
              break;
              default:
                  break;
              }
    
  }
  const handlesubmit =  (e) =>{
    e.preventDefault();
    setAccept(true);
    if (errorfname   && erroremail && errorpassword && errorconpassword){

    (UserService.createUser(JSON.stringify(data)).then(function(res){
      if(res.data == 'Your Email is Already Exist"Failed to create user."'){
        document.getElementById('email-repeat').style.display = 'block';
    } else {
      navigate("/login");
    }
        
      }) );
    

    }
  }
  return (
    <div className="Auth">
    <div className="a-left">
    <img src={Logo} alt="" />
    <div className="Webname">
    <h1>ZKC Media</h1>
    <h6>Explore the ideas throughout the world</h6>
    </div>
    </div>
    <div className="a-right">
    <form onSubmit={handlesubmit}className="infoForm authForm">
    <h3>Sign up</h3>
    <div>
    <input
    type="text"
            onChange={handlechange}
            placeholder="First Name"
            className="infoInput"
            name="user_name"
          />
          <input
            type="text"
            onChange={handlechange}
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
          {accept && <p style={{color:"red"}}>{errornamemsg}</p>}
        </div>


        <div>
          <input
            type="email"
            onChange={handlechange}
            className="infoInput"
            name="email"
            placeholder="Email"
          />
          {<div id="email-repeat" style={{display:"none",color:"red"}}>Your Email is Already Exist</div>}
          {accept && <p style={{color:"red"}}>{erroremailmsg}</p>}
        </div>

        <div>
          <input
            type="password"
            onChange={handlechange}
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          {accept && <p style={{color:"red"}}>{errorpasswordmsg}</p>}

          <input
            type="password"
            onChange={handlechange}
            className="infoInput"
            name="confirmPssword"
            placeholder="Confirm Password"
          />
        

        </div>

        <div>
            <div style={{fontSize: '12px'}}>Already have an account. <NavLink to="/logIn">Login!</NavLink></div>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
    </div>


  );
}


