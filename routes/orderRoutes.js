import express from 'express';
import { placeOrder, getUserOrders } from '../controllers/orderController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, placeOrder);
router.get('/', authenticate, getUserOrders);

export default router;
