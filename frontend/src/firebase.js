import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { readEnv } from "./env";

const firebaseConfig = {
    apiKey: readEnv("VITE_FIREBASE_API_KEY", "REACT_APP_FIREBASE_API_KEY", "REACT_APP_FIRABASE_API_KEY"),
    authDomain: readEnv("VITE_FIREBASE_AUTH_DOMAIN", "REACT_APP_FIREBASE_AUTH_DOMAIN", "REACT_APP_FIRABASE_AUTH_DOMAIN"),
    projectId: readEnv("VITE_FIREBASE_PROJECT_ID", "REACT_APP_FIREBASE_PROJECT_ID", "REACT_APP_FIRABASE_PROJECT_ID"),
    storageBucket: readEnv("VITE_FIREBASE_STORAGE_BUCKET", "REACT_APP_FIREBASE_STORAGE_BUCKET", "REACT_APP_FIRABASE_STORAGE_BUCKET"),
    messagingSenderId: readEnv("VITE_FIREBASE_MESSAGING_SENDER_ID", "REACT_APP_FIREBASE_MESSAGING_SENDER_ID", "REACT_APP_FIRABASE_MESSAGING_SENDER_ID"),
    appId: readEnv("VITE_FIREBASE_APP_ID", "REACT_APP_FIREBASE_APP_ID", "REACT_APP_FIRABASE_APP_ID")
};

export let auth = null;
export let authInitError = null;

try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} catch (error) {
    authInitError = error;
    // Keep app bootable even if auth is misconfigured (useful for demo/screenshot flows).
    console.warn("Firebase auth is disabled:", error?.message || error);
}
