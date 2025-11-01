import express from 'express';
import { registerAdmin, signinAdmin } from '../controllers/adminController.js';

const router = express.Router();
router.post('/signup', registerAdmin);
router.post('/signin', signinAdmin);


export default router;