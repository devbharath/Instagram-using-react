import React,{useState,useReducer,useContext} from "react";
import { Route, BrowserRouter, Routes, Link, Navigate} from "react-router-dom";
import phonepic from "./Images/phone.png";
import * as myIcon from "react-icons/ai"
import bootstrap from 'bootstrap'
import "./login-signup.css"
import instagram_logo from "./Images/insta-logo.png"
import play_store from "./Images/play-store.png"
import app_store from "./Images/app-store.png"
import LoginComp from './Components/LoginComp';
import BottomContent from './Components/BottomContent';
import FeedPage from './FeedPage'






function Login(props) {

  const defaultProfiles = [
    { username: "profile1", password: "profile1" },
    { username: "profile2", password: "profile2" },
    { username: "profile3", password: "profile3" },
  ];
  
  const initialState={
    typedusername:"",
    typedpassword:"",
    validatealert:true,
    authenticated:false
  }
  

  const reducer=(state,action)=>{
    switch(action.type){
      case "usrnamechange":
        return {...state,typedusername:action.value}
      case "usrpasschange":
        return {...state,typedpassword:action.value} 
      case "validate":
  
          let authcheck=defaultProfiles.some((profile)=>{
            if ((state.typedusername==profile.username) && (state.typedpassword==profile.password)) {
                return true
            }
          })
        return {...state,validatealert:authcheck,authenticated:authcheck}
      default: 
        return state
    }
  }


  const [state, dispatch]= useReducer(reducer,initialState)
  return (
    <div>
      <LoginComp  dispatchmd={dispatch} authalert={state.validatealert}/>
      <BottomContent/>
      { state.authenticated?<Navigate to="/FeedPage"/>:null
        }
    </div>
  );
}


export default Login;
