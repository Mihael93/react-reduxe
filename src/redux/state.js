const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

   _state: {
      profilePage: {
         postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post', likesCount: 10 },
            { id: 3, message: 'Hel yeah!', likesCount: 8 },
            { id: 4, message: 'tttttt', likesCount: 1 },
            { id: 5, message: 'Oppaaaa', likesCount: 3 },
         ],
         newPostText: "",
      },

      dialogsPage: {
         dialogsData: [
            { id: 1, name: 'Miahel' },
            { id: 2, name: 'Quentin' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Valera' },
            { id: 5, name: 'Olha' },
            { id: 6, name: 'Tania' },
         ],
         messagesData: [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'Wazzap!' },
            { id: 3, message: 'Yoy god!' },
            { id: 4, message: 'Bampa mampa!' },
         ],
      },

      sidebar: {
      },
   },
   _callSubscriber() {
      console.log('Somethings went wrong');
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer; // observer pattern
   },

   // addPost() {
   //    let newPost = {
   //       id: 6,
   //       message: this._state.profilePage.newPostText,
   //       likesCount: 0,
   //    };
   //    this._state.profilePage.postsData.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callSubscriber(this._state);
   // },

   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText;
   //    this._callSubscriber(this._state);
   // },

   //Universal method to do smth (type needed)
   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
         };
         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   },
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default store;
window.store = store;