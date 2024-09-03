import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
