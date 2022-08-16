import React, { useState, useReducer } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import LoginComp from "./Components/LoginComp";
import "./login-signup.css";
import NavBar from "./Components/NavBar";
import FeedPage from "./FeedPage";
import PostComp from "./Components/PostComp";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import CommentComp from "./Components/CommentComp";
import SwitchSuggComp from "./Components/SwitchSuggComp";
import SavedPosts from "./SavedPosts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/SavedPosts" element={<SavedPosts />}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/FeedPage" element={<FeedPage />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
