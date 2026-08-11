
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";




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
