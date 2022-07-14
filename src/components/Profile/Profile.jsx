// import React, { Component } from 'react';
import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo />
         <MyPost postsData={props.data.postsData} />
      </div>
   )
}

export default Profile;