import React from 'react'
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import instagram_logo from "../Images/insta-logo.png"
import * as ri from "react-icons/ri"
import * as md from "react-icons/md"
import * as fi from "react-icons/fi"
import * as ai from "react-icons/ai"
import "../login-signup.css"
import nav from '../navbar.module.css'

function NavBar(props) {
  const {saved}=props
  return (
    <div className={nav.navibar}>
        <div className={nav.navcont}>
            <div className={nav.logo}><img src={instagram_logo} alt='instagram logo'/></div>
            <span className={nav.search}><ai.AiOutlineSearch/><input type='search' placeholder="Search"></input></span>
            <div className={nav.icons_profile_holder}>
                <div className={nav.icon}><md.MdHomeFilled /></div>
                <div className={nav.icon}><ri.RiMessengerLine/></div>
                <div className={nav.icon}><fi.FiPlusSquare/></div>
                <div className={nav.icon}><ri.RiCompassLine/></div>
                <div className={nav.icon}><ai.AiOutlineHeart/></div>
               <div><div className={nav.profile}><img src={instagram_logo} alt='hiii'/>
               <div  className={nav.dropdown}>
                  <div><md.MdAccountCircle/>Profile</div>
                  <div><fi.FiBookmark/><Link to='/SavedPosts' state={saved}>Saved</Link></div>
                </div>
                </div>
               </div> 
            </div>
        </div>
    </div>
  )
}

export default NavBar