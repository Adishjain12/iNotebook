const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET='Adishjain';

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
      const salt=await bcrypt.genSalt(10);
      const secPass= await bcrypt.hash(req.body.password,salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      /*.then((user) => res.json(user))
      .catch(
        (err) => console.log(err),
        res.json({ error: "Enter unique email", message: err.message })
      );*/
      const data={
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      console.log(authToken);

      //res.json(user);
      res.send(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
