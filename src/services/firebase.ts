import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth(); 
const database = getDatabase();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GoogleAuthProvider();

export { auth, database , googleProvider,githubProvider, signInWithPopup}