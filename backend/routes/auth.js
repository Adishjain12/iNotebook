const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a user using: POST "api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Minimum length should be 3").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password length must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //If there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exist
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exist" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      /*.then((user) => res.json(user))
      .catch(
        (err) => console.log(err),
        res.json({ error: "Enter unique email", message: err.message })
      );*/

      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Sone error occured");
    }
  }
);

module.exports = router;
