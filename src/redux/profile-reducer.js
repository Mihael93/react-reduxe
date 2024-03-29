const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   postsData: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 10 },
      { id: 3, message: 'Hel yeah!', likesCount: 8 },
      { id: 4, message: 'tttttt', likesCount: 1 },
      { id: 5, message: 'Oppaaaa', likesCount: 3 },
   ],
   newPostText: "",
   profile: null,

};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
         };

      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };
      case SET_USER_PROFILE:
         return {
            ...state, profile: action.profile,
         };

      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;