// import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header(props) {
   return (
      <header className={s.header}>
         <img src='https://www.svgrepo.com/show/17331/free-sticker.svg' alt='logo' />

         <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login/'}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header;