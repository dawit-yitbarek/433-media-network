import express from 'express';
import { getPosts, getTopHeadines, getSpecificPost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/top-headlines', getTopHeadines);
router.get('/:id', getSpecificPost);

export default router;