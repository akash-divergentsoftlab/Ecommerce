import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCqm22dp-nl_Ei7oWteCd4KOExA8l1_8N8",
    authDomain: "react-ecom-9c22f.firebaseapp.com",
    projectId: "react-ecom-9c22f",
    storageBucket: "react-ecom-9c22f.appspot.com",
    messagingSenderId: "800185290730",
    appId: "1:800185290730:web:e37d08cf6b15f2bfa22c93",
    measurementId: "G-XCH925J4L7"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;