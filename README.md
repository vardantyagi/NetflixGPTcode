# 🎬 NetflixGPT

NetflixGPT is an AI-powered movie browsing web app built with **React** and **Redux Toolkit**.  
It integrates with the **TMDB API** to fetch movie data and uses **Gemini AI** to provide intelligent movie recommendations.  
Users can explore by genre, search with AI, and enjoy a Netflix-like UI.

---

## ✨ Features

- 🔑 **Firebase Authentication** – secure login & signup with validation
- 🎥 **Browse Movies** – powered by **TMDB API**
- 📂 **Organized by Genre** – movies stored in Redux slices
- 🤖 **AI-Powered Search** – Gemini API suggests movies based on prompts
- 🛣 **Routing** – seamless navigation across pages
- 🎨 **Netflix-Style UI** – clean & modern design

---

## 🛠 Tech Stack

- **Frontend:** React, Redux Toolkit, React Router  
- **Backend/Services:** Firebase (Authentication)  
- **APIs:** TMDB API, Gemini API  
- **Styling:** CSS / Tailwind (your choice, update if needed)

---

## 🚀 Getting Started

Follow these steps to run NetflixGPT locally:

### 1️⃣ Clone the repository
git clone https://github.com/vardantyagi/NetflixGPTcode.git
cd NetflixGPTcode

2️⃣ Install dependencies
npm install

### 3️⃣ Setup environment variables
Create a .env file in the root directory and add:

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

4️⃣ Run the app
npm start

App will run on 👉 http://localhost:5173
