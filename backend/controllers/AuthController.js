const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/Auth");
const nodemailer = require("nodemailer");

// Helper: Generate random 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// ================== Register ==================
const Register = async (req, res) => {
  try {
    const { userName, email, mobileNumber, password, confirmPassword } =
      req.body;

    if (!userName || !password || !confirmPassword) {
      return res.status(400).json({
        message: "Username, password, and confirm password are required",
      });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }

    // Check if email OR mobile already exists
    const existingUser = await Auth.findOne({
      $or: [{ email }, { mobileNumber }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or Mobile Number already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const user = new Auth({
      userName,
      email,
      mobileNumber,
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id }, // Payload
      process.env.JWT_SECRET, // Secret key from .env
      { expiresIn: "7d" } // Token expires in 7 days
    );

    // Send OTP via Email using Nodemailer

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        // pass: "lbax wckq xfou albo",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Your Verification OTP",
      text: `Hello ${user.userName},\n\nYour verification OTP is: ${otp}\n\nThis OTP will expire in 10 minutes.`,
      html: `<p>Hello ${user.userName},</p>
               <p>Your verification OTP is: <strong>${otp}</strong></p>
               <p>This OTP will expire in 10 minutes.</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // TODO: Send OTP via Email/SMS (optional here)
    console.log(`OTP for verification: ${otp}`);
    console.log("user is", user);
    return res.status(201).json({
      message: "Registered successfully. Please verify OTP.",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        isVerified: user.isVerified,
        token: token, // sending token also
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// ================== Login ==================
const Login = async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;

    // 1. Find user by email
    const user = await Auth.findOne({
      $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 2. Check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your account first",
        isVerified: false,
        userId: user._id,
      });
    }

    // 3. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 4. Generate JWT token
    // const token = jwt.sign(
    //   {
    //     id: user._id,
    //     email: user.email,
    //   },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "7d" }
    // );

    // 5. Return success response
    return res.status(200).json({
      message: "Login successful",
      // token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("Login controller error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

// ================== Forgot Password (Send OTP) ==================
// Forgot Password (Send OTP)
const forgotPassword = async (req, res) => {
  try {
    const { emailOrMobile } = req.body;

    // Find user by email or mobile
    const user = await Auth.findOne({
      $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
    });

    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    // Save OTP and expiry in the database
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // TODO: Send OTP via Email/SMS (this can be done via external services like Twilio or Nodemailer)
    console.log(`OTP for password reset: ${otp}`);

    return res.json({ message: "OTP sent for password reset" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during forgot password" });
  }
};

// ================== Verify OTP (for registration or forgot password) ==================
const verifyOTP = async (req, res) => {
  try {
    const { emailOrMobile, otp, newPassword } = req.body;

    // Find user by email or mobile
    const user = await Auth.findOne({
      $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify OTP and expiry
    if (user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // If OTP is valid and new password is provided, update the password
    if (newPassword) {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedNewPassword;
    }

    // Mark the user as verified (for registration case)
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res.json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during OTP verification" });
  }
};

module.exports = { Register, Login, forgotPassword, verifyOTP };
