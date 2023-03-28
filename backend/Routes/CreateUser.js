const express = require("express");
const router = express.Router();
const User = require("../modals/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const jwtSecret = "sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf"

router.post(
  "/createuser",
  body("email", "incorrect email").isEmail(),
  body("name", "name should be atleast 3 charecter").isLength({ min: 3 }),
  body("password", "password should be min 5").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "incorrect email").isEmail(),
    body("password", "password should be min 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "Try loggin with correct credentials" });
      }
      const passCompair = await bcrypt.compare(
        req.body.password,
        userdata.password
      );

      if (!passCompair) {
        return res
          .status(400)
          .json({ errors: "Try loggin with correct credentials" });
      }
      const data = {
        user: {
          id: userdata.id,
        },
      };
      const authToken = jwt.sign(data,jwtSecret)
      return res.json({ success: true ,authToken:authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
