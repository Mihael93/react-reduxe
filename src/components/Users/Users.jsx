// import React, { Component } from 'react';
import axios from "axios";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import React from "react";

class Users extends React.Component {
   getUsers = () => {
      if (this.props.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               this.props.setUsers(response.data.items);
            });
      }
   }

   render() {
      return (
         <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
               this.props.users.map(user => <div key={user.id}>
                  <span>
                     <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" className={s.userPhoto} />
                     </div>
                     <div>
                        {user.follow
                           ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                           : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                     </span>
                     <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                     </span>
                  </span>
               </div>)
            }
         </div>
      )
   }
}

export default Users;