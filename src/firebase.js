import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIWEc2g_A1dlmj2w9oznQQkc41cgRJxeA",
  authDomain: "clone-95db3.firebaseapp.com",
  projectId: "clone-95db3",
  storageBucket: "clone-95db3.appspot.com",
  messagingSenderId: "39815476756",
  appId: "1:39815476756:web:66b9d710edfa0353695901",
  measurementId: "G-RJV6XEEJWE",
};

//initialize the APP
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
