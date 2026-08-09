
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCcaHWqG6nDrFTaLcs_pY7Up-nC4CuSo80",
    authDomain: "authentication-d39a0.firebaseapp.com",
    projectId: "authentication-d39a0",
    storageBucket: "authentication-d39a0.firebasestorage.app",
    messagingSenderId: "673460338111",
    appId: "1:673460338111:web:f81f61837e82b50b64750a",
    measurementId: "G-K2FE5XX8VS"
};


let submitbtn = document.getElementById("sbtn");

submitbtn.addEventListener("click", (event) => {
    event.preventDefault()
    let getEmail = document.getElementById("semail");
    let getPass = document.getElementById("spass");

    createUserWithEmailAndPassword(auth, getEmail.value, getPass.value)


        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            Swal.fire({
                title: "Success!",
                text: "Sign Up Successfull!",
                icon: "success"
            });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            Swal.fire({
                icon: "error",
                title: errorMessage,
                
                // text: "Something went wrong!",
                // footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
            // ..
        });
})








const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);