## 433 Media Network

A modern, multi-category media platform unifying football, Forex, crypto, news, movies, and gaming content into a single ecosystem.
Built with a secure admin dashboard, fast content publishing, real-time fetching, and strong SEO/performance practices.

### 🚀 Features
🌍 Multi-Category Content System


Football news & match insights


Crypto market updates


Forex data with live rate integration


Global news publishing


Film database with posters & Telegram links


Mobile game releases and content


### 🔐 Admin Dashboard Features


Authentication (JWT-based)


Role/field-restricted access (Forex, Crypto, Film, Game, News, Football)


Content publishing


Media uploads


Post editing and moderation


Full CRUD for all categories


### 📱 Frontend Features


Fully responsive UI


Category-based browsing


High performance and optimized assets


Clean modern UI



### 📁 Project Structure
433-media-network/
│
├── backend/              # Node.js + Express API
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── frontend/             # React + Vite frontend
    ├── src/
    ├── public/
    └── package.json


🛠️ Tech Stack
Backend


Node.js


Express.js


PostgreSQL


pg


JWT Authentication


Frontend


React (Vite)


Tailwind CSS


Axios


React Router



### 🗄️ Database Schema
Admins
CREATE TABLE IF NOT EXISTS public.admins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    avatar TEXT,
    fields TEXT[] DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password TEXT
);

Posts
CREATE TABLE IF NOT EXISTS public.posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    category VARCHAR(50) NOT NULL,
    admin_id INTEGER REFERENCES public.admins(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Films
CREATE TABLE IF NOT EXISTS public.films (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    rating NUMERIC(2,1),
    description TEXT,
    poster_url TEXT NOT NULL,
    telegram_link TEXT NOT NULL,
    admin_id INTEGER REFERENCES public.admins(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Games
CREATE TABLE IF NOT EXISTS public.games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    badges TEXT,
    link TEXT NOT NULL,
    admin_id INTEGER REFERENCES public.admins(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### ⚙️ Environment Variables
Backend (/backend/.env)
FOOTBALL_API_KEY = Football match data API key
FRONTEND_URL = Frontend URL
BACKEND_URL = API base URL
DATABASE_URL = PostgreSQL connection URL
JWT_SECRET = JWT Token secret
SPORT_KEY =  Admin access key for football category
FOREX_KEY = Admin access key for forex category
CRYPTO_KEY = Admin access key for crypto category
NEWS_KEY = Admin access key for news category
FILM_KEY = Admin access key for film category
GAME_KEY = Admin access key for game category
PORT = Backend server port

Frontend (/frontend/.env)
VITE_BACKEND_URL = Backend API URL
VITE_FRONTEND_URL = Frontend base URL
VITE_FOREX_RATE_API = External API for forex rate fetch

### 🧪 Installation & Setup
Backend
cd backend
npm install
node server.js

Frontend
cd frontend
npm install
npm run dev


🌐 Deployment
Frontend is live at:
https://433-media-network.vercel.app/