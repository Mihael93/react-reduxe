// import React, { Component } from 'react';
import s from "./Post.module.css";

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png" alt="avatar-img" />
         {props.message};
         <div>
            <span>likes</span> {props.likes}
         </div>
      </div>
   )
}

export default Post;