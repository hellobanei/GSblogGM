import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7fxMWW6ziVkO5acDqjf3MdZxrh7Z6hO4",
  authDomain: "bloggm-2c8a7.firebaseapp.com",
  projectId: "bloggm-2c8a7",
  storageBucket: "bloggm-2c8a7.appspot.com",
  messagingSenderId: "1056984569506",
  appId: "1:1056984569506:web:e56b9694dd71b3e73ee9fb",
  measurementId: "G-3DR2FCLBBB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
