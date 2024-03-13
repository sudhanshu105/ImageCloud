import React, { useEffect } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {


  const user_name = localStorage.getItem("username");
  const userlastname = localStorage.getItem("userlastname");

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/");
    }
  })



  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    navigate("/");
  }


  return (<>
    <div className="navbar">
      <div className="navfirst">
        <ul className="ul">
        <Link to="/" > <p className='homeicon'>ImageCloud</p></Link>
        </ul>
      </div>


      <div className="navsecond">
        <ul className="navsecondul">
            <div className="username">{user_name + " " + userlastname}</div>
            <button className='btn buttonlogin' onClick={logout}>Logout</button>
        </ul>
      </div>
      </div>
      </>
  )
}

export default Navbar
