
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQjL9O1Z10JK1o5mB7cCDhve14p5n9MhI",
  authDomain: "notes-react-app-25307.firebaseapp.com",
  projectId: "notes-react-app-25307",
  storageBucket: "notes-react-app-25307.appspot.com",
  messagingSenderId: "399189681392",
  appId: "1:399189681392:web:ae9d62857448341f94ce35"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
