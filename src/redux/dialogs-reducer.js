const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messagesData.push({ id: 5, message: body })
         return state;
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.newBody;
         return state;
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: text, });

export default dialogsReducer;