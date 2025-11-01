import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoutes from './src/routes/uploadRoutes.js'
import matchRoutes from './src/routes/matchRoutes.js'
import postRoutes from './src/routes/postRoutes.js'
import filmRoutes from './src/routes/filmRoutes.js'
import gameRoutes from './src/routes/gameRoutes.js'
import trendingRoutes from './src/routes/trendingRoutes.js'
import adminRoutes from './src/routes/adminRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/upload', uploadRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/films', filmRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/trending', trendingRoutes);
app.use('/api/admin', adminRoutes);

// Add a health check endpoint to confirm backend is running
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});