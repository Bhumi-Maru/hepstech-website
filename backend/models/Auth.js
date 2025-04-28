const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: false, unique: true, sparse: true }, // unique if provided
    mobileNumber: { type: String, required: false, unique: true, sparse: true }, // unique if provided
    password: { type: String, required: true }, // Required for login/register
    otp: { type: String }, // For OTP verification (optional, only during forgot password / registration)
    otpExpiry: { type: Date }, // OTP expiry time (optional)
    isVerified: { type: Boolean, default: false }, // Whether user verified email/mobile
  },
  { timestamps: true }
); // automatically adds createdAt and updatedAt

const Auth = mongoose.model("Authentication", AuthSchema);

module.exports = Auth;
