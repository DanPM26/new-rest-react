import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBcsnYfeR4iGcQOR4xqAwMJGXam9lo2GXA",
    authDomain: "crud-react-8de65.firebaseapp.com",
    projectId: "crud-react-8de65",
    storageBucket: "crud-react-8de65.appspot.com",
    messagingSenderId: "865702663211",
    appId: "1:865702663211:web:f58ff3d96b70bff1ca466e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }