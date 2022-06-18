import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFCj-LjNHsx8N-7LBuM7b6yCeG98zxvS8",
    authDomain: "recipe-list-305e3.firebaseapp.com",
    projectId: "recipe-list-305e3",
    storageBucket: "recipe-list-305e3.appspot.com",
    messagingSenderId: "680448752577",
    appId: "1:680448752577:web:f0eb92701d57bce231cd40"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore } 
