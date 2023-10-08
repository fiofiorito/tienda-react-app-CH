// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUGANc8RdVHFZe-VK333YZppWKJLeDAh0",
    authDomain: "tienda-react-ifio.firebaseapp.com",
    projectId: "tienda-react-ifio",
    storageBucket: "tienda-react-ifio.appspot.com",
    messagingSenderId: "932913288055",
    appId: "1:932913288055:web:48795e6cef7d2b58a90772"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);