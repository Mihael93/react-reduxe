const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      // {
      //    id: 1, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
      //    follow: true, fullName: 'Mihael', status: 'I am boss', location: { country: 'Ukraine', city: 'Zaporizhia' }
      // },
      // {
      //    id: 2, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
      //    follow: false, fullName: 'Quentin', status: 'I am boss to', location: { country: 'Ukraine', city: 'Kyiv' }
      // },
      // {
      //    id: 3, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
      //    follow: false, fullName: 'Shara', status: 'I am boss tho', location: { country: 'USA', city: 'Philadelphia' }
      // },
      // {
      //    id: 4, photoUrl: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
      //    follow: true, fullName: 'Malenia', status: 'I am boss ayaya', location: { country: 'USA', city: 'Texas' }
      // },
   ],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, follow: true }
               }
               return user;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, follow: false }
               }
               return user;
            })
         }
      case SET_USERS: {
         if (state.users.length > 0) {
            return state
         }
         return {
            ...state,
            users: [...state.users, ...action.users],
         }
      }
      // return { ...state, users: [...state.users, ...action.users] }
      default:
         return state;
   }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;