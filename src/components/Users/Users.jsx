import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";


let Users = (props) => {
   let total = props.totalUsersCount;
   let pagesAll = props.pageSize;

   let pagesCount = Math.ceil(total / pagesAll);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      if (i === 10) break;
   }

   return (
      <div>
         <div>
            {pages.map(page => {
               return <span className={props.currentPage === page && style.selectedPage}
                  onClick={(event) => { props.onPageChanged(page) }}>{page}</span>
            })}
         </div>
         {
            props.users.map(user =>
               <div key={user.id}>
                  <span>
                     <div>
                        <NavLink to={'/profile/' + user.id}>
                           <img src={user.photos.small != null ? user.photos.small : userPhoto}
                              alt="user" className={style.userPhoto} />
                        </NavLink>

                     </div>
                     <div>
                        {user.follow
                           ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                              props.toggleFollowingProgress(true, user.id);
                              axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                                 {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY": "b307e0e7-b0a2-49a8-9d14-47728eeb7b0f"
                                    },
                                 })
                                 .then(response => {
                                    if (response.data.resultCode === 0) {
                                       props.unfollow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                 });
                           }}>Unfollow</button>
                           : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                              props.toggleFollowingProgress(true, user.id);
                              axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {},
                                 {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY": "b307e0e7-b0a2-49a8-9d14-47728eeb7b0f"
                                    },
                                 })
                                 .then(response => {
                                    if (response.data.resultCode === 0) {
                                       props.follow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                 });
                           }}>Follow</button>}
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
               </div >)
         }
      </div >
   )
}

export default Users;