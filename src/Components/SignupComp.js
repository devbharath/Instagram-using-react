import React from 'react'
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import phonepic from "../Images/phone.png";
import * as myIcon from "react-icons/ai"
import bootstrap from 'bootstrap'
import "../login-signup.css"
import instagram_logo from "../Images/insta-logo.png"
import play_store from "../Images/play-store.png"
import app_store from "../Images/app-store.png"

function SignupComp(props) {
  return (
    <div className='full-height'>
        <div className="form-blk form-blk-flex">
          <div className="form-cont">
            <div className="top-form">
             <div className="logo logo-sign"><img src={instagram_logo} alt="insta logo" /></div>
             <div className='gray-bold'>Sign up to see photos and videos from your friends.</div>
             <button className="btn-blue login-btn full-width signup-btn"><myIcon.AiFillFacebook/> Log in with Facebook</button>
             <div className="or-w-dash"><div></div><span>OR</span><div></div></div>
             <div className="form">
                 <input onChange={(event)=>props.dispatch({type:"regMobile", value:event.target.value})} type="text" placeholder="Mobile Number or Email"/>
                 <input onChange={(event)=>props.dispatch({type:"regFullName", value:event.target.value})} type="text" placeholder="Full Name"/>
                 <input onChange={(event)=>props.dispatch({type:"regUsername", value:event.target.value})} type="text" placeholder="Username"/>
                 <input onChange={(event)=>props.dispatch({type:"regPassword", value:event.target.value})} type="password" placeholder="Password"/>
                 {props.notEnoughLengthAlert?<div className='alertmsg'>"The Username and Password should be atleast 7 characters long"</div>:null}
                 {props.invalidEmailAlert?<div className='alertmsg'>Enter valid Email</div>:null}
                 {props.invalidPhAlert?<div className='alertmsg'>"Phone should be 10 digits"</div>:null}
                 <div className="gray-normal">People who use our service may have uploaded your contact information to Instagram. <strong>Learn More</strong></div>
                 <div className="gray-normal">By signing up, you agree to our Terms ,<strong> Data Policy and Cookies Policy .</strong></div>
                 <button onClick={()=>props.dispatch({type:"validate"})} className="btn-blue login-btn" >Sign up</button>
             </div>
            </div>
            <div className="middle-form">
                <div className="creat-acc"><span>Have an account?</span><span id="sign-up"><Link to="/">Log in</Link></span></div>
            </div>
            <div className="bottom-form">
                <div>Get the app.</div>
                <div className="download-app-from">
                    <img src={app_store} alt="app-store"/>
                    <img src={play_store} alt="play-store"/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignupComp