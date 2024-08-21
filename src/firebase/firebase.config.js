// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFyYTXwW8Z75KAgMQowc0zXKZyaB5uUfU",
    authDomain: "tourxsea.firebaseapp.com",
    projectId: "tourxsea",
    storageBucket: "tourxsea.appspot.com",
    messagingSenderId: "116341305259",
    appId: "1:116341305259:web:dd43ae04eafb286cf4acee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;