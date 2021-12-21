// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQ8dXUgI6oWwraM3l5ZLVfj33ffxa1gk",
  authDomain: "instagram2-a4f11.firebaseapp.com",
  projectId: "instagram2-a4f11",
  storageBucket: "instagram2-a4f11.appspot.com",
  messagingSenderId: "903328306147",
  appId: "1:903328306147:web:73aff45c90498b65e286d6"
};

// Initialize Firebase
const app =  !getApps().lenght ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};