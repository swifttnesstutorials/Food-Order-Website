import express from 'express';
import { getProfile } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js'; // Only import what is needed

const router = express.Router();

router.get('/profile', authenticate, getProfile);

export default router;
