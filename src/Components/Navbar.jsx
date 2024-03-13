import React from 'react'
// import React, { useState } from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

function Navbar(props) {

  return (<>
    <div className="navbar">
      <div className="navfirst">
        <ul className="ul">
            {/* <button className='homeicon'><Link to={localStorage.getItem("token")?"/user":"/"}><li className="li name" >Blinkit</li></Link></button>*/}
            <Link to="/"><p className='homeicon'>Image Cloud</p></Link>
        </ul>
      </div>


      <div className="navsecond">
        <ul className="navsecondul">
            <NavLink to="/login" className='link'><button className='buttonlogin'>Login</button></NavLink>
            <NavLink to="/signup"><button className='buttonsign'>Sign Up</button></NavLink>
        </ul>
      </div>
      </div>
      </>
  )
}

export default Navbar
