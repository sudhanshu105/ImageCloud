import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom';

function Home() {


  return (
    <div className='homepage'>
        <h1 className='headingtarget'>
            Welcome to my Image Cloud WebAPP
        </h1>

        <h3>
            You can upload you images here
        </h3>

        <div className='imageU'>
            <Link to="/login"><img src='https://www.nicepng.com/png/detail/129-1298352_upload-icon-logo-upload-file-png.png' alt="Upload " /> </Link>
        </div>

        <h3>
            How to Use? 
            <h4>
              Start by creating your free acoount and all set!
            </h4>
        </h3>

        <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>


    </div>
  )
}

export default Home