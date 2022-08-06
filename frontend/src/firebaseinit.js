import { initializeApp } from 'firebase/app';
import { getFirestore, doc } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = ({
  apiKey: "AIzaSyBWRTlc2Se2g_fbMlK-F6trOwOfgONaVIQ",
  authDomain: "gradehub-2cfd8.firebaseapp.com",
  projectId: "gradehub-2cfd8",
  storageBucket: "gradehub-2cfd8.appspot.com",
  messagingSenderId: "664890377818",
  appId: "1:664890377818:web:e7b6eed9f14ffc3c9aba63",
  measurementId: "G-C80LP5ZY8Q"
});
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export const gradeDoc = doc(db, 'grades/jihr3ihi')
export function addGrade() {
    const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    arrayExample: [5, true, "hello"],
    nullExample: null,
  }
  setDoc(gradeDoc,docData)
}
export default (db);
