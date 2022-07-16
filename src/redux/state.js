let renderFunction = () => {
   console.log('Somethings goes wrong');
};

let state = {

   profilePage: {
      postsData: [
         { id: 1, message: 'Hi, how are you?', likesCount: 15 },
         { id: 2, message: 'It\'s my first post', likesCount: 10 },
         { id: 3, message: 'Hel yeah!', likesCount: 8 },
         { id: 4, message: 'tttttt', likesCount: 1 },
         { id: 5, message: 'Oppaaaa', likesCount: 3 },
      ],
      newPostText: [],
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

};

window.state = state;

export function addPost() {
   let newPost = {
      id: 6,
      message: state.profilePage.newPostText,
      likesCount: 0,
   };
   state.profilePage.postsData.push(newPost);
   state.profilePage.newPostText = '';
   renderFunction(state);
};

export function updateNewPostText(newText) {
   state.profilePage.newPostText = newText;
   renderFunction(state);
};


export const subscribe = (observer) => {
   renderFunction = observer;  // observer pattern
};


export default state;
