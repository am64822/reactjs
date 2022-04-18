import { combineReducers, createStore, applyMiddleware,  compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import thunk from 'redux-thunk';
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { articlesReducer } from "./articles/reducer";

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'gbMessenger',
    storage,
}
    

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))   
);

// создаем persistor
export const persistor = persistStore(store);



