const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = generateToken({ id: user._id });
    return res.json({
      success: true,
      token,
      message: "Registration successful",
    });
  } catch (err) {
    let message = "Registration failed";
    if (err.code === 11000 && err.keyPattern?.email) {
      message = "Email already exists";
    } else if (err.message) {
      message = err.message;
    }
    return res.json({
      success: false,
      message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Email not found, please register",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = generateToken({ id: user._id });
    return res.json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Login failed",
      error: err.message,
    });
  }
};
