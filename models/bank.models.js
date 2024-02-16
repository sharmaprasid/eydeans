import mongoose from "mongoose";
const bankSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, index: true, required: true, trim: true },

  phone: { type: String, trim: true },
  mobile: { type: String, trim: true },
});

const bank = mongoose.models.bank || mongoose.model("bank", bankSchema);
export default bank;
