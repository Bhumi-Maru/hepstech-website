
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/Auth");
const nodemailer = require("nodemailer");
const twilio = require("twilio");

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

// Request OTP for Passwordless Login
const requestOtpForLogin = async (req, res) => {
  try {
    const { emailOrMobile } = req.body;

    if (!emailOrMobile) {
      return res
        .status(400)
        .json({ message: "Email or mobile number is required" });
    }

    console.log("login otp", req.body);

    // 1️⃣ Find user by email OR mobileNumber
    const user = await Auth.findOne({
      $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2️⃣ Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // 3️⃣ Save OTP to DB
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // 4️⃣ Send OTP:
    if (emailOrMobile.includes("@")) {
      // ✅ Send via Email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Your Login OTP",
        html: `<p>Hello ${user.userName},</p>
               <p>Your login OTP is: <strong>${otp}</strong></p>
               <p>This OTP will expire in 10 minutes.</p>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Error sending email:", error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      console.log("OTP sent via Email to:", user.email);
    } else {
      // ✅ Send via SMS (💡 Example using Twilio)
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const client = require("twilio")(accountSid, authToken);

      // Make sure the mobile number is in E.164 format
      const mobileNumber = user.mobileNumber; // Assuming user.mobileNumber is something like '971472XXXX'

      client.messages
        .create({
          body: `Hello ${user.userName}, your login OTP is: ${otp}`,
          from: process.env.TWILIO_PHONE_NUMBER, // Ensure this is a valid Twilio number
          to: mobileNumber, // Ensure it's in the correct format
        })
        .then((message) =>
          console.log(
            `OTP sent via SMS to: ${mobileNumber}, SID: ${message.sid}`
          )
        )
        .catch((error) => {
          console.error("Error sending SMS:", error);
          // You can handle this more gracefully, depending on your requirements
        });
    }

    return res.json({
      message: "OTP sent successfully",
      method: emailOrMobile.includes("@") ? "email" : "sms",
      email: user.email,
      mobileNumber: user.mobileNumber,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during OTP request" });
  }
};

// Verify OTP for Passwordless Login
const verifyOtpForLogin = async (req, res) => {
  try {
    const { emailOrMobile, otp } = req.body;

    if (!emailOrMobile || !otp) {
      return res
        .status(400)
        .json({ message: "Email/mobile and OTP are required" });
    }

    console.log("otppppp", req.body);

    // 🔍 Find user by email OR mobileNumber
    const user = await Auth.findOne({
      $or: [{ email: emailOrMobile }, { mobileNumber: emailOrMobile }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Check OTP validity
    if (user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // 🔄 Clear OTP fields after successful login
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // 🔑 Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // ✅ Send OTP SMS (Optional: send a confirmation message after successful login)
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: `Hello ${user.userName}, your login was successful. Welcome back!`,
        from: "1e6f1bc90e63cfc30362f649dc28c1bd", // Ensure this number can send SMS to the region
        to: user.mobileNumber,
      })
      .then((message) =>
        console.log(
          `Confirmation SMS sent to: ${user.mobileNumber}, SID: ${message.sid}`
        )
      )
      .catch((error) => {
        console.error("Error sending confirmation SMS:", error);
        // Handle the error if the SMS fails
      });

    // Return successful login response
    return res.json({
      message: "Login successful",
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        isVerified: user.isVerified,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during OTP verification" });
  }
};

module.exports = {
  Register,
  Login,
  forgotPassword,
  verifyOTP,
  requestOtpForLogin,
  verifyOtpForLogin,
};
