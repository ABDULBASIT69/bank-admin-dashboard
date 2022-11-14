import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAESK95xl-SjbMN3WJoUIm5kVeBYTwXAdU",
  authDomain: "bank-admin-dashboard.firebaseapp.com",
  databaseURL: "https://bank-admin-dashboard-default-rtdb.firebaseio.com",
  projectId: "bank-admin-dashboard",
  storageBucket: "bank-admin-dashboard.appspot.com",
  messagingSenderId: "205727495951",
  appId: "1:205727495951:web:75c60af84eb4ee7b2eb07a",
  measurementId: "G-E3JWY72JPF"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
// export const auth = ""//getAuth(app);