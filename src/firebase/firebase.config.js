// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7CcjZVbwruCy7SkSh4zl2ggEp7u0ZLyc",
    authDomain: "job-portal-5a7bc.firebaseapp.com",
    projectId: "job-portal-5a7bc",
    storageBucket: "job-portal-5a7bc.firebasestorage.app",
    messagingSenderId: "352693836343",
    appId: "1:352693836343:web:0b6ff9fdd8f56697e83db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;