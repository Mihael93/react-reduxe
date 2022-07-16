// import React, { Component } from 'react';
import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo />
         <MyPost
            newPostText={props.profilePage.newPostText}
            postsData={props.profilePage.postsData}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost} />
      </div>
   )
}

export default Profile;