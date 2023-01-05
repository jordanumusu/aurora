//need to find a way to take all the imports from the other js. not sure copying config is kosher
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

//grab things from html so i can manipulate them
var mainTitle = document.querySelector('#mainTitle')
var resumeBefore = document.querySelector('#resumeBefore')
var jobDesc = document.querySelector('#jobDesc')
var submitInfo = document.querySelector('#submitInfo')
var jobDesc = document.querySelector('#jobDesc')

//attempt to send input fields to firebase
function insertData() {
    set(ref(db, "People/"+ sessionStorage.getItem('user')),{
        Resume: resumeBefore.value,
        Job: jobDesc.value,
    })
    .then(()=>{
        alert("Data inserted successfully!");
        resumeBefore.clear()
        jobDesc.clear()
    })
    .catch((error)=>{
        alert(error);
    });
}

submitInfo.addEventListener("click", insertData)
mainTitle.innerText = "Updated Text" + sessionStorage.getItem('user')

