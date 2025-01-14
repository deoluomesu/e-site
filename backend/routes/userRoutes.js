const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register a user
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login a user
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
