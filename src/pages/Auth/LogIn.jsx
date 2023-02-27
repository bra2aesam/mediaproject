import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import UserService from '../../apis/UserService';
import { json, NavLink, useNavigate } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();

  

  const handelsubmit = (e) => {
    e.preventDefault();

    const user = {
      email:e.target.email.value,
      password:e.target.password.value,
    }
    

    UserService.finduser(JSON.stringify(user)).then(function(res){
        if (res.data == "user not found"){
          console.log(res.data)
        }else {
          // console.log(res.data)
          localStorage.setItem("user", JSON.stringify(res.data))
          navigate("/");
        }
      })}

    return (
     
        <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Notela</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

     
    
      <div className="a-right">
        <form onSubmit={handelsubmit} className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="email"
              className="infoInput"
              name="email"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account <NavLink to="/signUp" >Sign up</NavLink>
              </span>
            <button type="submit" className="button infoButton">Login</button>
          </div>
        </form>
      </div>
      </div>
     
    );
  }


export default LogIn;
