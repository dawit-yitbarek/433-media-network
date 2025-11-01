import express from 'express';
import { getTrendingContent } from '../controllers/trendingController.js';

const router = express.Router();

router.get('/', getTrendingContent);

export default router;