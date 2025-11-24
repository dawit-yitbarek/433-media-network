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
├── backend/
|   |src/           # Node.js + Express API
│   |  ├── routes/
│   │  |── middleware/
│   │  |── config/
│   │  |── models/
|   |  └── controllers/
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
 # 433 Media Network

 A multi-category media platform (sports/matches, films, games, crypto, forex and news) with a React + Vite frontend and an Express/Postgres backend. The project includes a JWT-based admin system, media uploads (Cloudinary), and REST API endpoints for posts, matches, films, games and trending content.

 **This README** documents how to run the project locally, required environment variables, project layout and useful endpoints.

 **Quick Links**
 - **Backend:** `./backend`
 - **Frontend:** `./frontend`

 **Recommended versions:** Node.js 16+ and npm 8+ (or newer).

 ## Getting Started (local development)

 - **Backend**
     - Install dependencies and run in development:
         ```powershell
         cd backend
         npm install
         npm run dev    # uses nodemon to restart on changes
         ```
     - Production start:
         ```powershell
         npm start
         ```

 - **Frontend**
     - Install dependencies and start dev server:
         ```powershell
         cd frontend
         npm install
         npm run dev
         ```
     - Build for production:
         ```powershell
         npm run build
         npm run preview   # preview built assets
         ```

 - Run both: open two terminals and start backend and frontend separately.

 ## Environment variables
 Place backend variables in `backend/.env` and frontend ones in `frontend/.env` (Vite requires `VITE_` prefix for variables exposed to the browser).

 - Backend (examples)
     - `PORT` - port for the backend server (e.g. `4000`)
     - `FRONTEND_URL` - allowed origin for CORS (e.g. `http://localhost:5173`)
     - `DATABASE_URL` - PostgreSQL connection string
     - `JWT_SECRET` - secret used to sign JWT tokens
     - `SPORT_KEY`, `FOREX_KEY`, `CRYPTO_KEY`, `NEWS_KEY`, `FILM_KEY`, `GAME_KEY` - admin category keys
     - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` - Cloudinary credentials

     Example `backend/.env` (DO NOT commit this file):
     ```env
     PORT=4000
     FRONTEND_URL=http://localhost:5173
     DATABASE_URL=postgres://user:pass@host:5432/dbname
     JWT_SECRET=your_jwt_secret_here
     SPORT_KEY=sport1234
     FOREX_KEY=forex1234
     CRYPTO_KEY=crypto1234
     NEWS_KEY=news1234
     FILM_KEY=film1234
     GAME_KEY=game1234
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```

 - Frontend (examples in `frontend/.env`)
     - `VITE_BACKEND_URL` - backend base URL (e.g. `http://localhost:4000`)
     - `VITE_FRONTEND_URL` - frontend base URL (optional)

     Example `frontend/.env`:
     ```env
     VITE_BACKEND_URL=http://localhost:4000
     ```

 ## Project structure (important folders)

 - `backend/` — Express API
     - `server.js` — app entry
     - `src/routes/` — route definitions (`/api/posts`, `/api/matches`, `/api/films`, `/api/games`, `/api/trending`, `/api/upload`, `/api/admin`)
     - `src/controllers/` — request handlers
     - `src/config/db.js` — Postgres pool (uses `DATABASE_URL`)
     - `src/models/cloudinary.js` — Cloudinary configuration (uses `CLOUDINARY_*` env vars)

 - `frontend/` — React + Vite app
     - `src/` — components and pages
     - `public/` — static assets
     - `package.json` — scripts: `dev`, `build`, `preview`

 ## Notable API endpoints
 - `GET /health` — health check (returns `OK`)
 - `POST/GET/PUT/DELETE /api/posts` — posts CRUD
 - `GET /api/matches` — matches
 - `POST /api/upload` — file uploads (uses Cloudinary)
 - `POST /api/admin` — admin auth and admin-related operations

 Check route files in `backend/src/routes/` for full list and request contracts.

 ## Database
 This project expects a PostgreSQL database. `backend/src/config/db.js` uses `process.env.DATABASE_URL`. Create the database and provide the connection string in the `.env` file.

 ## Deploying
 - Frontend is friendly for deployment on Vercel (project already includes `vercel.json`).
 - Backend can be deployed to platforms that support Node + Postgres (Heroku, Railway, Render, Fly.io, etc.). Ensure `DATABASE_URL` and Cloudinary env vars are set in the target environment.

 ## Useful commands summary
 ```powershell
 # Backend
 cd backend
 npm install
 npm run dev    # development
 npm start      # production

 # Frontend
 cd frontend
 npm install
 npm run dev
 npm run build
 ```