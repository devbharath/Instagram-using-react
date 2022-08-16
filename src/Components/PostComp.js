import React, { useState } from 'react'
import CommentComp from './CommentComp';
import fourfive from "../Images/4by5.png";
import oneone from "../Images/1by1.png"
import onedotbyone from "../Images/1.91by1.png"
import fp from '../FeedPage.module.css'
import nav from '../navbar.module.css'
import * as ai from "react-icons/ai"
import * as fa  from "react-icons/fa"
import * as fi  from "react-icons/fi"



function PostComp(props) {
   const [like, setLike] = useState(false)
   const [saveflag,setSaveFlag]= useState(false)
   const [likeFlag, setLikeFlag]=useState(true)

   const {locSave,setLocSave,setFirstTime,user,saved,setSaved, liked, setLiked}=props

   const addtosave=()=>{
    setFirstTime(true)
    if (!saved[user.profile]) {
        let tempsave
        tempsave=saved
        tempsave[user.profile]=user
        setSaved(tempsave)
        console.log("saved are",tempsave)
        setSaveFlag(true)

    } else {
        let tempsave=saved
        delete tempsave[user.profile]
        setSaved(tempsave)
        console.log("Saved are",tempsave)
        setSaveFlag(false)

    }
    setLocSave(!locSave)

   }

   const handleLike=()=>{

    setFirstTime(true)
    let templike=liked
    setLikeFlag(!likeFlag)
    console.log("likeflag",likeFlag)
    templike[user.profile]=likeFlag
    setLiked(templike)
    console.log("liked",liked)
    setLocSave(!locSave)

   }
  
    return (
    <div className={fp.post}>
        <div className={fp.header}>
            <div className={fp.username_profile}>
                <div className={fp.profile}><img src={user.avatar} alt=""/></div>
                <div className={fp.username}>{user.name}</div>
            </div>
            <div className={fp.moreoption}><fi.FiMoreHorizontal/></div>
        </div>
        <div className={fp.post_media}>
            <img src={user.avatar} alt=''/>
        </div>
        <div className={fp.icon_cont}>
            <div className={fp.like_comm_share}>
               <span onClick={()=>handleLike()}> {
               
               liked[user.profile]?<ai.AiFillHeart style={{color:"rgb(237,73,86)"}}/>:<ai.AiOutlineHeart/>   
                
               }
               </span>
               <span><fi.FiMessageCircle/></span>
               <span ><fi.FiSend/></span> 
            </div>
            <div onClick={()=>addtosave()}>
                {
                    saved[user.profile]?<fa.FaBookmark style={{fontSize:"22px"}}/>:<fa.FaRegBookmark  style={{fontSize:"22px"}}/>
                }
                
            </div>
        </div>
        <div className={fp.caption}>
            <div className={fp.username}><span style={{fontWeight:"600"}}>{user.name}</span> <span>In Holidayyyy</span></div>
        </div>
        <div className={fp.small_graytxt}>
            <div>Few seconds ago</div>
        </div>
        <CommentComp setFirstTime={setFirstTime} setLocSave={setLocSave} locSave={locSave} comm={props.comm} profile={user.profile} setComm={props.setComm} />
    </div>
  )
}

export default PostComp