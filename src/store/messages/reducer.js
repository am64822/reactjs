import { ADD_MESSAGE, DELETE_MESSAGES_OF_CHAT, INIT_MESSAGES_OF_CHAT} from "./actions";
import { chatsInitialState } from '../chats/reducer';


//console.log('инициализация сообщений');
let messagesInitialState = {};
chatsInitialState.forEach((item, index, array) => {
    messagesInitialState[index] = []; 
});

export const messagesReducer = (state = messagesInitialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE: {
            const chatID = payload.chatIDtarget;
            const messageText = payload.newMessageText;
            return {...state, [chatID]: [messageText, ...state[chatID]]};
        }
        case DELETE_MESSAGES_OF_CHAT: {
            delete state[+payload];
            return state;
        }
        case INIT_MESSAGES_OF_CHAT: {
            return {...state, [payload]: []}
        }        
        default:
            return state;
    }
} 