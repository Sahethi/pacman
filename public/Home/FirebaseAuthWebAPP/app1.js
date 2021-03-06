console.log("hello");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRBEdTtY7QPIb2XBb1qPjDd-SWgRrpQ64",
  authDomain: "pacman-707af.firebaseapp.com",
  projectId: "pacman-707af",
  storageBucket: "pacman-707af.appspot.com",
  messagingSenderId: "178774322780",
  appId: "1:178774322780:web:476cffcb5c1dd31700c099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if(document.getElementById("signIn") != null){
  console.log("hello1");
    document.getElementById("signIn").addEventListener("click", function(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log("logged in");
          window.location.replace("./../main/index.html");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    });
}

if(document.getElementById("signUp") != null){
    document.getElementById("signUp").addEventListener("click", function(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("created");
            window.location.replace("./index.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode + errorMessage);
        });

    });
}