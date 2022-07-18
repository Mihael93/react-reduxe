import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
         newMessageBody: '',
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

   //Universal method to do smth (type needed)
   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);

   },
}

export default store;
window.store = store;