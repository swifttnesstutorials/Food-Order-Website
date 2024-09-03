import Payment from '../models/Payment.js';

export const processPayment = async (req, res) => {
  const { order, paymentMethod, transactionId } = req.body;
  try {
    const payment = new Payment({ order, paymentMethod, transactionId, paymentStatus: 'Completed' });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
