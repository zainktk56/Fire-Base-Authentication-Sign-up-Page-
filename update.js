import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyCcaHWqG6nDrFTaLcs_pY7Up-nC4CuSo80",
    authDomain: "authentication-d39a0.firebaseapp.com",
    projectId: "authentication-d39a0",
    storageBucket: "authentication-d39a0.firebasestorage.app",
    messagingSenderId: "673460338111",
    appId: "1:673460338111:web:f81f61837e82b50b64750a",
    measurementId: "G-K2FE5XX8VS"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const user = auth.currentUser;

function updateUserProfile (user){
    const userName=user.displayName;
    const userEmail = user.email; 
    const userProfilePicture = user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent=userName;
    document.getElementById(("userEmail")).textContent=userEmail;
   document.getElementById("userProfile_picture").src = user.photoURL;
}


onAuthStateChanged(auth,(user)=>{
    if (user){
        updateUserProfile(user);
        const uid = user.uid;
        return uid;

    }
    else{
        Swal.fire({
                icon: "error",
                title: 'Create Account and Login',
               
                
                // text: "Something went wrong!",
                // footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
             window.location.href = "./index.html";
    }
})