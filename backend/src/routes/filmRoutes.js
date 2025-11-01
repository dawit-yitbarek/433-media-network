import express from 'express';
import { getFilms } from '../controllers/filmController.js';

const router = express.Router();

router.get('/', getFilms);

export default router;