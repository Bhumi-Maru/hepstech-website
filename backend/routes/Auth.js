const express = require("express");
const {
  Register,
  Login,
  forgotPassword,
  verifyOTP,
} = require("../controllers/AuthController");
const verifyToken = require("../Middleware/verifyTokenMiddleware");

const AuthRouter = express.Router();

// Register Route
AuthRouter.post("/register", Register);

// Login Route
AuthRouter.post("/login", verifyToken, Login);

// Forgot Password Route
AuthRouter.post("/forgot-password", forgotPassword);

// Verify OTP Route (for Registration or Forgot Password)
AuthRouter.post("/verify-otp", verifyOTP);

module.exports = AuthRouter;
