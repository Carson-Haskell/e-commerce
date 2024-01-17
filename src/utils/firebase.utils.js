import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD1z6uxot7cn2UWQtSMnAk6iLZ2K2GWVE",
  authDomain: "ecommerce-db-51ac5.firebaseapp.com",
  projectId: "ecommerce-db-51ac5",
  storageBucket: "ecommerce-db-51ac5.appspot.com",
  messagingSenderId: "841658272007",
  appId: "1:841658272007:web:dee5cf45bf60de0595dda2",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }

  return userDocRef;
};
