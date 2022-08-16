import React, { useReducer, useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import SignupComp from "./Components/SignupComp";
import BottomContent from "./Components/BottomContent";



function Signup(props) {

  console.log(props)
  const initialState = {
    regMobile: "",
    regFullName: "",
    regUsername: "",
    regPassword: "",
  };
  
  const [notEnoughLengthAlert, setNotEnoughLengthAlert]=useState(false)
  const [invalidEmailAlert, setInvalidEmailAlert]=useState(false)
  const [invalidPhAlert, setInvalidPhAlert]=useState(false)
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "regMobile":
        return { ...state, regMobile: action.value };
      case "regFullName":
        return { ...state, regFullName: action.value };
      case "regUsername":
        return { ...state, regUsername: action.value };
      case "regPassword":
        return { ...state, regPassword: action.value };
      case "validate":
          if ((state.regUsername.length) < 7 || (state.regPassword.length) < 7) {
            setNotEnoughLengthAlert(true)
          }
          else{
            setNotEnoughLengthAlert(false)
          }
          if (state.regMobile.charAt(0).includes(Number)) {
            if((state.regMobile.length)!==10){
              setInvalidPhAlert(true)
            }
            else{
              setInvalidPhAlert(false)
            }
          } 
          else {
            if (state.regMobile.includes("@") === false) {
              setInvalidEmailAlert(true)
            }
            else{
              setInvalidEmailAlert(false)
            }
          }
        return state
      default:
        return state;
    }
  };  

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <SignupComp notEnoughLengthAlert={notEnoughLengthAlert} invalidEmailAlert={invalidEmailAlert} invalidPhAlert={invalidPhAlert}  dispatch={dispatch} />
      <BottomContent />
    </div>
  );
}

export default Signup;
