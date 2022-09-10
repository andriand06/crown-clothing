/**
 * Import all method used from firebase
 */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKnZKsB16mpl18OR3NANQsLjyo258BYU",
  authDomain: "crown-clothing-2b34c.firebaseapp.com",
  projectId: "crown-clothing-2b34c",
  storageBucket: "crown-clothing-2b34c.appspot.com",
  messagingSenderId: "758447011270",
  appId: "1:758447011270:web:383520f4f40bc853ab6ec7",
};
//Initialize our firebase app with firebase config
const firebaseApp = initializeApp(firebaseConfig);

//set our google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
/**
 * One Auth for firebase app
 * but can be more than one provider in firebase app
 * get authenthication from our firebase app
 */
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
/**
 * Get our Firestore database
 */
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  /**
   * If in our firestore there are no users document
   * firestore will create one for us
   * doc -> is method to get in to our document reference instance
   */
  console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  /**
   * If user data exists then return back userDocRef
   * If user data not exists then create the document in collection by using user auth data
   */

  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
