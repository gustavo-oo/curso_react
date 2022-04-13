import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Client from "../../core/Client";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "next-crud-b7a18.appspot.com",
  messagingSenderId: "1085921463765",
  appId: "1:1085921463765:web:f9f6a0ec49c4b2c136415c"
};


const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db