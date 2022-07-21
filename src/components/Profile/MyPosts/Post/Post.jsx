// import React, { Component } from 'react';
import s from "./Post.module.css";
import basicPhoto from '../../../../assets/images/user.png'

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src={basicPhoto} alt="avatar-img" />
         {props.message};
         <div>
            <span>likes</span> {props.likes}
         </div>
      </div>
   )
}

export default Post;