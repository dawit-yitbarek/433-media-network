import express from 'express';
import { getPosts, getTopHeadines, getSpecificPost, addGeneralPost, addFilm, addGame } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/top-headlines', getTopHeadines);
router.post('/post', addGeneralPost);
router.post('/film', addFilm);
router.post('/game', addGame);
router.get('/:id', getSpecificPost);

export default router;