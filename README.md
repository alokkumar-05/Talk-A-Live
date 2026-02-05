# Talk-A-Live

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO.

🚀 **Live Demo:** [https://talk-a-live-51y8.onrender.com](https://talk-a-live-51y8.onrender.com)

## ✨ Features

-   **Real-time Messaging:** Instant message delivery using Socket.IO.
-   **Online Status:** See who is currently online.
-   **Authentication:** Secure Signup/Login with JWT.
-   **Image Sharing:** Upload and share images in chat (powered by Cloudinary).
-   **Theming:** Multiple themes support (Dark, Light, Coffee, Cyberpunk, etc.) using DaisyUI.
-   **Responsive Design:** Optimized for both desktop and mobile.

## 🛠️ Tech Stack

### Frontend
-   **React** (Vite)
-   **TailwindCSS** + **DaisyUI** (Styling)
-   **Zustand** (State Management)
-   **Axios** (API Requests)
-   **Socket.IO Client** (Real-time connection)

### Backend
-   **Node.js** + **Express**
-   **MongoDB** + **Mongoose** (Database)
-   **Socket.IO** (WebSocket Server)
-   **JWT** (Authentication)
-   **Cloudinary** (Image Storage)

## 📂 Project Structure

```bash
Talk-A-Live/
├── backend/         # Server-side code (Node/Express)
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── lib/         # Utilities (DB, Socket, Cloudinary)
│   │   ├── models/      # Mongoose Schemas
│   │   ├── routes/      # API Routes
│   │   └── index.js     # Entry point
│   └── ...
├── frontend/        # Client-side code (React)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # App routes/pages
│   │   ├── store/       # Zustand stores (auth, chat, theme)
│   │   └── ...
│   └── ...
└── README.md        # Project Documentation
```

## ⚙️ Environment Variables

To run this project locally, you need to set up the following environment variables in a `.env` file in the `backend` directory:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# For Production
NODE_ENV=production
CLIENT_URL=https://talk-a-live-51y8.onrender.com
```

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install Dependencies**
    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```
3.  **Run Locally**
    ```bash
    # Backend
    cd backend
    npm run dev

    # Frontend
    cd ../frontend
    npm run dev
    ```
