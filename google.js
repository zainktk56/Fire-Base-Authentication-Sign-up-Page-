import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";




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
auth.languageCode = 'it';
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();




const googleloginbtn=document.getElementById("sbtn2")
googleloginbtn.addEventListener("click",()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    
    window.location.href="./logged.html"
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    
  });
})


