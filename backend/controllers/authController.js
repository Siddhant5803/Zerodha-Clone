const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

/**
 * POST /api/auth/signup
 * body: { email, password }
 */
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Missing fields" });

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ msg: "User already exists" });

    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hash });

    return res.status(201).json({ token: signToken(user._id) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * POST /api/auth/login
 * body: { email, password }
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Missing fields" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ msg: "Invalid credentials" });

    res.json({ token: signToken(user._id) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * GET /api/auth/me
 * header: Authorization: Bearer <token>
 * (uses authMiddleware)
 */
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
