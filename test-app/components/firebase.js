// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVmQSViMyumP4xeKjzcZ3DcKrPnX_z0Vw",
    authDomain: "theta-tau-cd254.firebaseapp.com",
    databaseURL: "https://theta-tau-cd254-default-rtdb.firebaseio.com",
    projectId: "theta-tau-cd254",
    storageBucket: "theta-tau-cd254.appspot.com",
    messagingSenderId: "1095434272369",
    appId: "1:1095434272369:web:23b15fa38372ab407065d0",
    measurementId: "G-SC9NQZZTCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()

