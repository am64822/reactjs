import { ADD_CHAT, DELETE_CHAT } from "./actions"

export const chatsInitialState = [{id: '0', name: 'chat 0'}, {id: '1', name: 'chat 1'}, 
{id: '2', name: 'chat 2'}, {id: '3', name: 'chat 3'}];

export const chatsReducer = (state = chatsInitialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT: {
            return [
                ...state,
                {id: payload.chatID, name: payload.chatName} 
            ]
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }        
        default:
            return state;
    }
} 