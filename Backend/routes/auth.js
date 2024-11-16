const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middlewares/authMiddleware"); // Importing authentication middleware

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  // Validate required fields
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ username, email, password: hashedPassword, role });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and role matches
    if (!user || user.role !== role) {
      return res.status(401).json({ message: "Invalid credentials or role" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected route example: Get user profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password"); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Role-based route example
router.get("/admin/dashboard", authenticate, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access forbidden: Admins only" });
  }
  res.json({ message: "Welcome to the admin dashboard" });
});

module.exports = router;
