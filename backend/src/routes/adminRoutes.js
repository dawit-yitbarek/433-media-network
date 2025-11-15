import express from 'express';
import { registerAdmin, signinAdmin, requestFieldAccess } from '../controllers/adminController.js';

const router = express.Router();
router.post('/signup', registerAdmin);
router.post('/signin', signinAdmin);
router.post('/request-field', requestFieldAccess)


export default router;