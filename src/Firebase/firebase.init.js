import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

// Firebase Initialization
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;