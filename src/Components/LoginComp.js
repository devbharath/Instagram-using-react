import React from 'react'
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import phonepic from "../Images/phone.png";
import * as myIcon from "react-icons/ai"
import bootstrap from 'bootstrap'
import "../login-signup.css"
import instagram_logo from "../Images/insta-logo.png"
import play_store from "../Images/play-store.png"
import app_store from "../Images/app-store.png"


function LoginComp(props) {
  return (
    <div  className="full-height">
        <div className="phpic-form-cont">
        <div className="phpic">
          <img src={phonepic} alt="Phone pic" />
        </div>
        <div className="form-blk">
          <div className="form-cont">
            <div className="top-form">
             <div className="logo"><img src={instagram_logo} alt="insta logo" /></div>
             <div className="form">
                 <input onChange={(event)=>props.dispatchmd({type:"usrnamechange", value:[event.target.value]})} name='username' type="text" placeholder="Phone number, username, or email"/>
                 <input onChange={(event)=>props.dispatchmd({type:"usrpasschange", value:[event.target.value]})} name='password' type="password" placeholder="Password"/>
                 <button onClick={()=>props.dispatchmd({type:"validate"})} className="btn-blue login-btn">Log In</button>
                 <div className="or-w-dash"><div></div><span>OR</span><div></div></div>
                 <div className="fb-login"><myIcon.AiFillFacebook/> Log in with Facebook</div>
                 {
                  props.authalert?null:<div className='alertmsg'>The username you entered doesn't belong to an account. Please check your username and try again.</div>
                 }
                 <div className="forgot-pass">Forgot password?</div>
             </div>
            </div>
            <div className="middle-form">
                <div className="creat-acc"><span>Don't have an account?</span><span id="sign-up"><Link to="/Signup">Sign up</Link></span></div>
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
     
    </div>
  )
}

export default LoginComp