import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoutes from './src/routes/uploadRoutes.js'
import matchRoutes from './src/routes/matchRoutes.js'
import postRoutes from './src/routes/postRoutes.js'

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

// Add a health check endpoint to confirm backend is running
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});