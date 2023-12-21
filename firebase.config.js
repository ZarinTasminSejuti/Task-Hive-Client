// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6PJOdgBMK8o0F-V9PN0tbV1ydEBzBI_g",
  authDomain: "task-hive-project.firebaseapp.com",
  projectId: "task-hive-project",
  storageBucket: "task-hive-project.appspot.com",
  messagingSenderId: "322671761318",
  appId: "1:322671761318:web:4bdaf66147c8a892d5e167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;