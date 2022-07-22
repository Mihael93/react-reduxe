// import React, { Component } from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageAC, setTotalUsersCountAC, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);