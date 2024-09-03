import Restaurant from '../models/Restaurant.js';

export const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};

export const getRestaurantMenu = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).populate('menu');
  if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
  res.json(restaurant.menu);
};
