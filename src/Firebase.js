import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXjgZxcYm4-ctlBYiTFfOmkt1bfv6bSE8",
  authDomain: "mellow-83a7f.firebaseapp.com",
  projectId: "mellow-83a7f",
  storageBucket: "mellow-83a7f.appspot.com",
  messagingSenderId: "51817925821",
  appId: "1:51817925821:web:f00332daa004fdcd863bd4",
  measurementId: "G-K1W2VE42BR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
