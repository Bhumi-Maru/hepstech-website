const express = require("express");
const {
  Register,
  Login,
  forgotPassword,
  verifyOTP,
  requestOtpForLogin,
  verifyOtpForLogin,
} = require("../controllers/AuthController");
const verifyToken = require("../Middleware/verifyTokenMiddleware");

const AuthRouter = express.Router();

// Register Route
AuthRouter.post("/register", Register);

// Login Route
AuthRouter.post("/login", Login);

// Forgot Password Route
AuthRouter.post("/forgot-password", forgotPassword);

// Verify OTP Route (for Registration or Forgot Password)
AuthRouter.post("/verify-otp", verifyOTP);

// Request OTP for Login
AuthRouter.post("/request-otp", requestOtpForLogin);

// Verify OTP for Login
AuthRouter.post("/verify-otp-login", verifyOtpForLogin);

module.exports = AuthRouter;
