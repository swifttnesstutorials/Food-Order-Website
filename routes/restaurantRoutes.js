import express from 'express';
import { getRestaurants, getRestaurantMenu } from '../controllers/restaurantController.js';

const router = express.Router();

// Public routes, no authentication required
router.get('/', getRestaurants);
router.get('/:id/menu', getRestaurantMenu);

export default router;
