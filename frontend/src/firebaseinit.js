import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = initializeApp({
  authDomain: "gradehub-2cfd8.firebaseapp.com",
  projectId: "gradehub-2cfd8",
  storageBucket: "gradehub-2cfd8.appspot.com",
  messagingSenderId: "664890377818",
  appId: "1:664890377818:web:e7b6eed9f14ffc3c9aba63",
  measurementId: "G-C80LP5ZY8Q"
});
const db = getFirestore(firebaseConfig);
export default db;