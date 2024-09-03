import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  const { restaurant, orderItems, totalAmount } = req.body;
  try {
    const order = new Order({ user: req.user._id, restaurant, orderItems, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};
