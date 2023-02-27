import "./App.css"
import LogIn from "./pages/Auth/LogIn";
import Group from "./pages/group/Group";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/logIn" element={<LogIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/group/:id" element={<Group/>}/>
      
       
        </Routes>
    </div>
  );
}

export default App;
