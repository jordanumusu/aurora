import { initializeApp } from "firebase/app";
import {getDatabase, ref, get, set, child, update, remove} from "firebase/database"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_gPr5XWSQBIt0r8yZFcgVXr3nv3mJ1O0",
  authDomain: "project-aurora-55d29.firebaseapp.com",
  projectId: "project-aurora-55d29",
  storageBucket: "project-aurora-55d29.appspot.com",
  messagingSenderId: "483038460629",
  appId: "1:483038460629:web:162ad1a13fa8becfe1c05c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase()
const provider = new GoogleAuthProvider()
var joinAurora = document.querySelector('#joinAurora')
var mainTitle = document.querySelector('#mainTitle')
let user = auth.currentUser;

async function googleAuth() {
    await signInWithPopup(auth, provider)
    user = auth.currentUser
    alert("Auth is a sucess!")
    const url = '/dist/aboutYou.html'
    sessionStorage.setItem('displayName', user.displayName)
    sessionStorage.setItem('user', user)
    window.location = url 
    }

joinAurora.addEventListener("click", googleAuth)

if (window.location.href === '/dist/aboutYou.html') {
    window.addEventListener('load', () => {
        console.log("nasty", sessionStorage.getItem('displayName'))
        console.log("nasty", sessionStorage.getItem('user'))
    });
}