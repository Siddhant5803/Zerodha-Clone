const express = require("express");
const router = express.Router();
const { signup, login, getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", protect, getMe);      // simple token‑check endpoint

module.exports = router;
