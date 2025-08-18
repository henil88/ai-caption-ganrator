# 📸 AI Caption Generator

A full-stack web app where users can **upload a photo** and get an **AI-generated caption** for social media.  
Users can customize captions by selecting:
- 🌍 **Language** (English, Hindi, Spanish, etc.)  
- 🎭 **Tone/Mood** (funny, casual, professional, etc.)  

Captions are generated using **Gemini AI API**, making it easier than ever to create engaging posts.

🔗 **Live App:** [ai-caption-generator-free.netlify.app](https://ai-caption-generator-free.netlify.app/)  
📂 **Repository:** [GitHub Repo](https://github.com/henil88/ai-caption-ganrator.git)  

---

## 🚀 Features
- Upload an image and generate captions instantly.  
- Choose caption **language** and **tone/mood**.  
- Secure **user authentication** (register/login).  
- Copy captions to clipboard with one click.  
- Responsive UI with **Tailwind CSS**.  
- Powered by **Gemini AI API**.  
- Image upload & storage with **ImageKit**.  

---

## 🛠️ Tech Stack
**Frontend:** React, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**AI:** Gemini AI API  
**Image Hosting:** ImageKit  
**Hosting:**  
- Backend → Render  
- Frontend → Netlify  

---

## 📂 Folder Structure

### Backend
```bash
backend/
├── src/
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── post.controller.js
│   ├── db/
│   │   └── db.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── post.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── post.routes.js
│   ├── service/
│   │   ├── ai.service.js
│   │   └── storage.service.js
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

### Frontend

```bash
frontend/
├── public/
├── src/
│   ├── api/
│   │   ├── authapi.js
│   │   └── imageapi.js
│   ├── assets/
│   │   └── img-icon/
│   ├── components/
│   │   ├── CopyButton.jsx
│   │   ├── ImageUpload.jsx
│   │   ├── LanguageDropdown.jsx
│   │   ├── Loader.jsx
│   │   ├── Nav.jsx
│   │   └── ToneDropdown.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── AuthPage.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   └── Register.jsx
│   ├── routes/
│   │   └── MainRoutes.jsx
│   ├── utils/
│   │   ├── formData.js
│   │   └── Model.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── .gitignore
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/henil88/ai-caption-ganrator.git
cd ai-caption-ganrator
```

### 2️⃣ Setup backend

```bash
cd backend
npm install
# Create a .env file with:
# MONGODB_URL = "YOUR_MONGODB_URL"
# JWT_SECRET = "JWT_SECRET"
# GEMINI_API_KEY = "GEMINI_API_KEY"
# IMAGEKIT_PUBLIC_KEY = "IMAGEKIT_PUBLIC_KEY"
# IMAGEKIT_PRIVATE_KEY = "IMAGEKIT_PRIVATE_KEY"
# IMAGEKIT_URL_ENDPOINT = "IMAGEKIT_URL_ENDPOINT"
npm run start
```

### 3️⃣ Setup frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

In `backend/.env`:

```env
MONGODB_URL = "YOUR_MONGODB_URL"
JWT_SECRET = "JWT_SECRET"
GEMINI_API_KEY = "GEMINI_API_KEY"
IMAGEKIT_PUBLIC_KEY = "IMAGEKIT_PUBLIC_KEY"
IMAGEKIT_PRIVATE_KEY = "IMAGEKIT_PRIVATE_KEY"
IMAGEKIT_URL_ENDPOINT = "IMAGEKIT_URL_ENDPOINT"
```

---

## 🚀 Deployment

* **Frontend:** [Netlify](https://ai-caption-generator-free.netlify.app/)  
* **Backend:** Render  

---

## 🙌 Acknowledgements

* [Gemini AI API](https://ai.google.dev/)  
* [Render](https://render.com/)  
* [MongoDB Atlas](https://www.mongodb.com/atlas)  
* [TailwindCSS](https://tailwindcss.com/)  
* [ImageKit](https://imagekit.io/)  

---

## 📜 License

This project is licensed under the **MIT License**.
