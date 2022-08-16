import React, { useEffect, useState } from "react";
import { BiSmile } from "react-icons/bi";
import { MdCommentBank } from "react-icons/md";
import fp from "../FeedPage.module.css";
import instagram_logo from "../Images/insta-logo.png";
import * as fi  from "react-icons/fi"


const CommentComp = (props) => {
  const { comm, setComm, profile, locSave, setLocSave ,setFirstTime} = props;

  const [typedVal, setTypedVal] = useState("");
  const [compComm, setCompComm] = useState([]);
  const [commbtn, setCommbtn] = useState(false);
  const [showComm , setShowComm]= useState(false)
  const [showorNot,setShoworNot]=useState("Show")

  useEffect(()=>{
    
  })

  const onShow=()=>{
    setShowComm(!showComm)
  }

  const handlechange = (event) => {
    setTypedVal(event.target.value);
  };

  const postcomm = () => {
    debugger
    if (typedVal !== "") {
      setFirstTime(true)
      let commArray
      if(comm[profile]){commArray=comm[profile]}else{commArray = compComm;}
      console.log(comm)
      console.log(commArray)
      commArray.push(typedVal);
      console.log(commArray)
      setCompComm(commArray);
      let globalComm = comm;
      globalComm[profile] = compComm;
      setComm(globalComm);
      console.log(comm);
      setTypedVal("");
      setLocSave(!locSave)
    }
  };

  return (
    <div><div onClick={()=>onShow()} style={{fontSize:"13px",textAlign:"left",paddingLeft:"16px", cursor:"pointer"}} className={fp.grayname}>{showorNot} Comments</div>
      {showComm?
      (<div style={{display:{showComm}}} className={fp.comments}>
        {comm[profile] ? (
          comm[profile].map((comment, index) => (
              <div className={fp.smallprof}>
                <div className={fp.profuname}>
                  <div className={fp.profile}>
                    <img src={instagram_logo} alt="" />
                  </div>
                  <div>
                    <div className={fp.username} style={{marginBottom:"7px"}}>Bharath7Brad<span>{comment}</span></div>
                    <div className={fp.grayname}>Few seconds ago</div>
                  </div>
                  
                </div>
                <div><fi.FiMoreHorizontal/></div>
              </div>
   
          ))
        ) : (
          <div>No comments yet</div>
        )}
      </div>):null}
      <div className={fp.comment_box}>
        <span>
          <BiSmile />
        </span>
        <input
          className={fp.tets}
          value={typedVal}
          onChange={(event) => handlechange(event)}
          type="text"
          placeholder="Add a comment..."
        />
        <button disabled={commbtn} onClick={() => postcomm()}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentComp;
