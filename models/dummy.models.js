import mongoose from "mongoose";
const bankSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true, required: true, trim: true },
  // routing_no: { type: String, index: true, trim: true },
  // logo: { type: String, trim: true },
  // banner: { type: String, trim: true },
  phone: { type: String, trim: true },
  mobile: { type: String, trim: true },
  // order: { type: Number, required: true },
  // display: { type: Boolean, default: false },
  // featured: { type: Boolean, default: false },
  // rating: { type: String, trim: true },
  // type: { type: String, trim: true },
  // lat: { type: String, trim: true },
  // long: { type: String, trim: true },
  // address: { type: String, trim: true },
  // secondary_address: { type: String, trim: true },
  // description: { type: String, trim: true },
  // deleted_at: { type: Date },
  // created_by: { type: mongoose.Schema.ObjectId, required: true },
  // updated_by: { type: mongoose.Schema.ObjectId, required: true },
  // created_at: { type: Date, default: Date.now },
  // updated_at: { type: Date, default: Date.now },
});

const bank = mongoose.models.bank || mongoose.model("bank", bankSchema);
export default bank;
