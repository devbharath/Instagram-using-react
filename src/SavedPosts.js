import React from 'react'
import { useLocation } from 'react-router-dom'
import { MediaGrid } from './Components/MediaGrid'
import fp from './FeedPage.module.css'
import ProfileHeader from './Components/ProfileHeader'
import NavBar from './Components/NavBar'


const SavedPosts = (props) => {
  const location = useLocation()
  const savedposts=location.state
  return (<div>
    <NavBar/>
    <div className={fp.savedbody}>
      <ProfileHeader/>
      <MediaGrid savedposts={savedposts}/>
      </div>
      </div>
  )
}

export default SavedPosts