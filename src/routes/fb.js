// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWl7a_KrnrWXYMmjT2-ZTHkw6-fVnYKYo",
  authDomain: "xp-tracker-afd6b.firebaseapp.com",
  projectId: "xp-tracker-afd6b",
  storageBucket: "xp-tracker-afd6b.appspot.com",
  messagingSenderId: "836556698781",
  appId: "1:836556698781:web:a2468c932d86e49dd55074",
  measurementId: "G-ZPXEHG28RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;