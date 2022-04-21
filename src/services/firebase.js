// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyx9G6lmuWVXG8vTtFgh5pB_2qSE9_zIo",
  authDomain: "reactjs-firebase-c194f.firebaseapp.com",
  databaseURL: "https://reactjs-firebase-c194f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactjs-firebase-c194f",
  storageBucket: "reactjs-firebase-c194f.appspot.com",
  messagingSenderId: "210314486315",
  appId: "1:210314486315:web:f50fdf5c293e231313c06e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
    //console.log('createUserWithEmailAndPassword');
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword (auth, email, pass);
    //console.log('signInWithEmailAndPassword');
};

export const logOut = async () => {
    await signOut (auth);
    //console.log('signOut');
};

export const userRef = ref(db, "user");
//export const userNameRef = ref(db, "user/name");
//export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);