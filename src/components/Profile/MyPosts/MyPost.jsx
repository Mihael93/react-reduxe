// import React, { Component } from 'react';
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {

   let postsElements = props.postsData.map((post) => {
      return <Post key={post.id} id={post.id} message={post.message} likes={post.likesCount} />
   })

   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div className={s.new}>
            <div>
               <textarea></textarea>
            </div>
            <button>Add comment</button>
            <button>Remove</button>
         </div>
         <div className={s.block}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPost;