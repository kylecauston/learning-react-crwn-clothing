import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAufuDjf6JhbOQ8eBL3Jh6W5ZnydK80wnA",
    authDomain: "crwn-clothing-db-b4293.firebaseapp.com",
    projectId: "crwn-clothing-db-b4293",
    storageBucket: "crwn-clothing-db-b4293.appspot.com",
    messagingSenderId: "586155222205",
    appId: "1:586155222205:web:a21b821a175ed0bfc4c3d4"
};

// Initialize Firebase  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    "prompt": "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("An error occurred when creating an account. ", error);
        }
    } 
    
    return userDocRef;
}