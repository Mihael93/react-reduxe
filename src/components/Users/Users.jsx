import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";


let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      if (i === 20) break;
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
                        <NavLink to={'/profile' + user.id}>
                           <img src={user.photos.small != null ? user.photos.small : userPhoto}
                              alt="user" className={style.userPhoto} />
                        </NavLink>

                     </div>
                     <div>
                        {user.follow
                           ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                           : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
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