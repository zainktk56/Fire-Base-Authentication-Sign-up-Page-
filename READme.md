# 🔐 Firebase Authentication Web App

[![Firebase](https://img.shields.io/badge/Firebase-v12.17.1-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2021-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)]()

> **A clean, modern authentication system** with Email/Password and Google Sign‑in, wrapped in a beautiful glass‑morphism UI that adapts seamlessly to any device.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Email/Password Auth** | Create an account and log in with email + password |
| 🌐 **Google Sign‑In** | One‑click login using your Google account (popup) |
| 👤 **User Profile Page** | Displays avatar, display name, and email after login |
| 🚪 **Logout** | Secure logout with SweetAlert confirmation |
| 🧩 **Auth State Persistence** | Firebase keeps you logged in across page reloads |
| 📱 **Fully Responsive** | Looks great on phones, tablets, and desktops (glass‑morphism with clamp typography) |
| 💬 **User Feedback** | SweetAlert2 popups for success / error messages |
| 🎨 **Consistent UI** | The same glass‑card design across all pages – signup, login, and profile |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Firebase Authentication** | Backend auth service (email/password + Google provider) |
| **Vanilla JavaScript (ES Modules)** | All logic in separate modules (`script.js`, `login.js`, `google.js`, `update.js`) |
| **HTML5 & CSS3** | Custom glass‑effect styles with `backdrop-filter`, `clamp()` for responsive typography |
| **SweetAlert2** | Beautiful, customizable alert dialogs |
| **Google Fonts** | Poppins font for clean, modern typography |

---

## 📁 Project Structure
project-root/
│
├── index.html # Sign‑up page (email + Google)
├── login.html # Login page (email + Google)
├── logged.html # User profile page (displayed after successful login)
├── style.css # Shared styles (glass card, responsive, buttons, etc.)
│
├── script.js # Sign‑up logic (createUserWithEmailAndPassword)
├── login.js # Login logic (signInWithEmailAndPassword)
├── google.js # Google Sign‑In logic (signInWithPopup)
├── update.js # Auth state listener + profile updater for logged.html
│
└── images/ # (Optional) background image folder
└── vladimir163rus-railway-2818748_1.jpg # Default background



---

## 🚀 Getting Started

### Prerequisites

- A **Firebase project** with Authentication enabled (Email/Password and Google sign‑in).
- A static server (e.g., VS Code **Live Server**, `python -m http.server`, or any HTTP server).

### 1. Clone the repository

```bash
git clone https://github.com/zainktk56/Complete-FireBase-Auth
cd firebase-auth-app


Firebase Configuration
Go to the Firebase Console and create a project (or use an existing one).

Enable Authentication → Sign‑in methods:

Enable Email/Password.

Enable Google.

Register your web app and copy the Firebase configuration object (under Project Settings → Your apps → Config).

Replace the firebaseConfig in all four JavaScript files (script.js, login.js, google.js, update.js) with your credentials:

js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"   // optional
};
⚠️ Security tip: For production, consider using environment variables or a separate config file to keep your keys safe.

3. Run the app
Open the project folder in VS Code and use Live Server (right‑click on index.html → Open with Live Server).
Alternatively, from the terminal:

bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
📱 How to Use
Sign Up (index.html)
Enter an email and password → click Sign Up.

Or click Continue with Google to sign in with your Google account.

Login (login.html)
Use your email and password, or the Google button.

On success, you are redirected to logged.html.

Profile Page (logged.html)
Displays your profile picture, name, and email (fetched from Firebase).

Click Logout to sign out and return to index.html.

Error Handling
Invalid credentials, duplicate emails, network errors – all shown as SweetAlert popups.

📱 Responsive Design
Device	Behaviour
Mobile (≤ 500px)	Cards stretch full width, paddings reduce, buttons become full‑width.
Tablet (≈ 768px)	Cards centre with comfortable spacing.
Desktop (≥ 1024px)	Fixed max‑width (420px) with generous padding and elevation.
All font sizes are set with clamp() for smooth scaling across screen sizes.

🎨 Customization
Change the background
Edit style.css and replace the background-image URL:

css
body {
  background-image: url(./images/your-new-image.jpg);
}
Change primary button colour
In style.css, look for #sbtn and change background-color: chartreuse; to any colour you like.
For the logout button in logged.html, change the .logout-btn colour similarly.

Add more sign‑in providers
You can extend Firebase Authentication with Facebook, Twitter, etc. – just import the provider and add the button logic.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page if you want to contribute.

Fork the repo.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some amazing feature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

🙌 Acknowledgements
Firebase – Backend authentication service.

SweetAlert2 – Beautiful popups.

Google Fonts – Poppins font.

📧 Contact
Your Name – Muhammad Zain – zaincreationz56@gmail.com
Project Link: https://github.com/zainktk56/Complete-FireBase-Auth

⭐ If you like this project, give it a star! ⭐

text
