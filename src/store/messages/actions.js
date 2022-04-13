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

export const addMessageWithReply = (newMessage, chatID) => (dispatch) => {
    dispatch(addMessage(newMessage, chatID));
    //console.log(newMessage, chatID);

    if (newMessage.author !== 'robot') {
        // без setTimeout все срабатывает настролько быстро, что задваивается значение new Date().valueOf() для сообщений от 'me'
        // и от робота. Пришлось добавить 'rb' в начале id для сообщений от робота, чтобы id отличался
        let robotReply = {id: 'rb'+ new Date().valueOf(), text: 'reply from robot', author: "robot"};
        dispatch(addMessage(robotReply, chatID));
        //console.log(robotReply.text, robotReply.author);
    }
}