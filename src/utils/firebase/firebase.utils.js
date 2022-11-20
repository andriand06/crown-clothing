/**
 * Import all method used from firebase
 */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
/**
 * One Auth for firebase app
 * but can be more than one googleProvider in firebase app
 * get authenthication from our firebase app
 */
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
/**
 * Get our Firestore database
 */
export const db = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //get collection reference from the collectionKey in our db
  const collectionRef = collection(db, collectionKey);
  //get batch object
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    //get document reference from object.title in our collection reference
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //set object to our docRef
    batch.set(docRef, object);
  });
  // fire batch
  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
export const signUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

//every time state change (sign in / sign out) will call this function with callback to be done
//this listener will triggered when user signin / sign out
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  /**
   * If in our firestore there are no users document
   * firestore will create one for us
   * doc -> is method to get in to our document reference instance
   */
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  /**
   * If user data exists then return back userDocRef
   * If user data not exists then create the document in collection by using user auth data
   */

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
