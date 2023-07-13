const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post("/createuser", 
[

    body("email").isEmail(),
    body("password").isLength({ min: 5 })

],
async (req, res) => {

    //check for validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
    });

    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
