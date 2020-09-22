import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAly5Cn9XcA_DDnZmn2AkxtXUmrE01Hy_s',
  authDomain: 'rachelonlineshop.firebaseapp.com',
  databaseURL: 'https://rachelonlineshop.firebaseio.com',
  projectId: 'rachelonlineshop',
  storageBucket: 'rachelonlineshop.appspot.com',
  messagingSenderId: '448298567969',
  appId: '1:448298567969:web:ceda8d564123affafa9660',
  measurementId: 'G-TPMQL74JZZ'
}
 firebase.initializeApp(config)
 export const auth = firebase.auth()
 export const firestore = firebase.firestore()
// this gives us access to the function from google auth library
 const provider = new firebase.auth.GoogleAuthProvider()
// trigger email log in pop up whenever we use google auth
 provider.setCustomParameters({prompt: 'select_account'})

 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;