const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
};

// case SET_USERS: {
//    if (state.users.length > 0) {
//       return state
//    }
//    return {
//       ...state,
//       users: [...state.users, ...action.users],
//    }
// }

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
         return { ...state, users: action.users }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state, currentPage: action.currentPage
         }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state, totalUsersCount: action.count
         }
      }
      default:
         return state;
   }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default usersReducer;