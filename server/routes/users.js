const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { verifyTokenAndAuthorization } = require("../utils/verifyToken");
const router = express.Router();

router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({
        success: false,
        message: "User with given ID not found!",
      });

    res.status(200).json({
      success: true,
      user: user.name,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err,
    });
  }
});
router.post("/", verifyTokenAndAuthorization, async (req, res) => {});
router.patch("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      success: true,
      user: updatedUser.name,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err,
    });
  }
});
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
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
