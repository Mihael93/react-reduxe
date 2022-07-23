// import React, { Component } from 'react';
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <MyPostContainer />
      </div>
   )
}

export default Profile;