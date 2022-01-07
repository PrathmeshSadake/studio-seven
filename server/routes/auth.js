const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      message: "User created successfully",
      user: user._id,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status().json({
        success: false,
        message: "Wrong credentials!",
      });
    const verified = await bcrypt.compare(password, user.password);
    if (!verified)
      return res.status().json({
        success: false,
        message: "Wrong credentials!",
      });
    const jwtPayload = { user: user._id, isAdmin: user.isAdmin };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
      expiresIn: "45d",
    });
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err,
    });
  }
});

module.exports = router;
