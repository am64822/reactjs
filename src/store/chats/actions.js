export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (newChatId, newChatName) => ({
    type: ADD_CHAT,
    payload: {chatID: newChatId, chatName: newChatName}
});

export const deleteChat = (idToDelete) => ({
    type: DELETE_CHAT,
    payload: idToDelete
});