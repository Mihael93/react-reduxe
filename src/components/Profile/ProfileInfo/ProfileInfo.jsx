// import React, { Component } from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img alt='promo' src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300' />
         </div>
         <div className={s.description}>
            avatar + description
         </div>
      </div>
   )
}

export default ProfileInfo;