import React from 'react'
import "../login-signup.css"
import * as myIcon from "react-icons/ai"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";


function BottomContent() {
  return (
    <div className='bottomcont'>
       <div class="related">
        <div><a href="https://www.instagram.com/">Meta</a></div>
        <div><a href="#">About</a></div>
        <div><a href="#">Blog</a></div>
        <div><a href="#">Jobs</a></div>
        <div><a href="#">Help</a></div>
        <div><a href="#">API</a></div>
        <div><a href="#">Privacy</a></div>
        <div><a href="#">Terms</a></div>
        <div><a href="#">Top Accounts</a></div>
        <div><a href="#">Hastags</a></div>
        <div><a href="#">Locations</a></div>
        <div><a href="#">Instagram Lite</a></div>
    </div>
    <div class="entertainment related">
        <div><a href="#">Dance</a></div>
        <div><a href="#">Food & Drinks</a></div>
        <div><a href="#">Home & Garden</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Visual Arts</a></div>
    </div>
    <div class="lang-copyr related">
        <div class="lang"><a href="#">English<myIcon.AiOutlineDown/></a></div>
        <div class="copyr"><a href="#"> © 2022 Instagram from Meta</a></div>
    </div>
    </div>
  )
}

export default BottomContent