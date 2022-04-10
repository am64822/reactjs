export const INIT_MESSAGES_OF_CHAT = 'MESSAGE::INIT_MESSAGES_OF_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGES_OF_CHAT = 'MESSAGE::DELETE_MESSAGES_OF_CHAT';


export const addMessage = (newMessage, chatID) => ({
    type: ADD_MESSAGE,
    payload: {newMessageText: newMessage, chatIDtarget: chatID}
});

export const deleteMessagesOfChat = (chatID) => ({
    type: DELETE_MESSAGES_OF_CHAT,
    payload: chatID
});

export const initMessagesOfChat = (chatID) => ({
    type: INIT_MESSAGES_OF_CHAT,
    payload: chatID
});