import React, { useEffect, useState } from "react";
import fp from "../FeedPage.module.css";

export const MediaGrid = (props) => {
    const [savedimg, setsavedimg]=useState([])
  const { savedposts } = props;
  console.log(savedposts)

useEffect(()=>  {
    let images;
    let keys = Object.keys(savedposts);
    images = keys.map((ele, ind) => {
      return savedposts[ele].avatar;
    });
    console.log(images);
    setsavedimg(images)
},[])



  return (
    <div>
      <div className={fp.gridcont}>
        {
            savedimg.map((ele)=>{
                return <div key={ele}><img src={ele} alt='Saved Pics'/></div>
            })
        }
      </div>
    </div>
  );
};
