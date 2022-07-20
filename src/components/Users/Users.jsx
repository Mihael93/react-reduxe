// import React, { Component } from 'react';
import s from "./Users.module.css";

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
            follow: true, fullName: 'Mihael', status: 'I am boss', location: { country: 'Ukraine', city: 'Zaporizhia' }
         },
         {
            id: 2, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
            follow: false, fullName: 'Quentin', status: 'I am boss to', location: { country: 'Ukraine', city: 'Kyiv' }
         },
         {
            id: 3, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
            follow: false, fullName: 'Shara', status: 'I am boss tho', location: { country: 'USA', city: 'Philadelphia' }
         },
         {
            id: 4, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
            follow: true, fullName: 'Malenia', status: 'I am boss ayaya', location: { country: 'USA', city: 'Texas' }
         },
      ]);
   }

   return (
      <div>
         {
            props.users.map(user => <div key={user.id}>
               <span>
                  <div>
                     <img src={user.photoUrl} alt="user" className={s.userPhoto} />
                  </div>
                  <div>
                     {user.follow
                        ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{user.fullName}</div>
                     <div>{user.status}</div>
                  </span>
                  <span>
                     <div>{user.location.country}</div>
                     <div>{user.location.city}</div>
                  </span>
               </span>
            </div>)
         }
      </div>
   )
}

export default Users;