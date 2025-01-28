import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3x7tkeasBs7InU43phu9zC-lrNBPfpB0",
    authDomain: "test-4a6f3.firebaseapp.com",
    projectId: "test-4a6f3",
    storageBucket: "test-4a6f3.appspot.com",
    messagingSenderId: "858204908745",
    appId: "1:858204908745:web:c7e971437286ccb20db118"
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  authDomain: "cadre-webpage.firebaseapp.com",
  projectId: "cadre-webpage",
  storageBucket: "cadre-webpage.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_APP_MSG,
  appId: process.env.NEXT_PUBLIC_APP_APP,
  measurementId: process.env.NEXT_PUBLIC_APP_MSR,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore reference
const db = getFirestore(app);

export default db;
