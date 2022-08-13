import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, query, where } from 'firebase/firestore';
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
class City {
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
export const cityConverter = {
    toFirestore: (city) => {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new City(data.name, data.state, data.country);
    }
};
export const gradeDoc = doc(db, 'grades', 'jihr3ihi')
export async function idk() {
  const docSnap = await getDoc(gradeDoc);
const data = docSnap.data()
  var list = data.grade
  return list
}
export default (db);
