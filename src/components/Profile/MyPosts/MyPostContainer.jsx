// import React, { Component } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator, } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";



const MyPostContainer = (props) => {

   let state = props.store.getState();

   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   }

   let onPostChage = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <MyPost
         updateNewPostText={onPostChage}
         addPost={addPost}
         postsData={state.profilePage.postsData}
         newPostText={state.profilePage.newPostText} />
   )
}

export default MyPostContainer;