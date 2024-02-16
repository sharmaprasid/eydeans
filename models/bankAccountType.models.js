const mongoose = require("mongoose");

const bankaccounttypeSchema = new mongoose.Schema({
  bank: { type: mongoose.Schema.ObjectId, index: true, required: true },
  title: { type: String, required: true, trim: true },
  slug: { type: String, trim: true },
  account_type: { type: mongoose.Schema.ObjectId, required: true },
  image: { type: String, trim: true },
  display: { type: Boolean, default: false },
  description: { type: String },
  created_by: { type: mongoose.Schema.ObjectId, required: true },
  updated_by: { type: mongoose.Schema.ObjectId, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const bankaccounttype =
  mongoose.models.bankaccounttype ||
  mongoose.model("bankaccounttype", bankaccounttypeSchema);
export default bankaccounttype;
