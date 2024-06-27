// Assuming you have initialized Express and connected to MongoDB using Mongoose

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming User model is defined

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user instance
    user = new User({ email, password });

    // Save user to database
    await user.save();

    // Respond with success message
    res.json({ msg: 'Signup successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
