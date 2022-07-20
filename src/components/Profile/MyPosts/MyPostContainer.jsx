// import React, { Component } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator, } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";


// const MyPostContainer = () => {

//    return (
//       <StoreContext.Consumer>
//          {(store) => {
//             let state = store.getState();
//             let addPost = () => {
//                store.dispatch(addPostActionCreator());
//             }
//             let onPostChage = (text) => {
//                store.dispatch(updateNewPostTextActionCreator(text));
//             }

//             return (
//                <MyPost
//                   updateNewPostText={onPostChage}
//                   addPost={addPost}
//                   postsData={state.profilePage.postsData}
//                   newPostText={state.profilePage.newPostText} />
//             )
//          }}
//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addPost: () => dispatch(addPostActionCreator()),
   }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;