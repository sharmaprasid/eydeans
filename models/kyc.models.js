const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema({
  accountType: { type: String },
  salutation: { type: String, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  emailAddress: { type: String, unique: true, required: true },
  highestEducation: { type: String },
  faculty: { type: String },
  boardUniversity: { type: String },
  province: { type: String },
  district: { type: String },
  localBody: { type: String },
  wardNo: { type: String },
  toleStreetName: { type: String },
  declaration: { type: Boolean, default: false },
  agreeToTerms: { type: Boolean, default: false },
});

const KYCModel = mongoose.models.KYC || mongoose.model("KYC", kycSchema);

module.exports = KYCModel;
