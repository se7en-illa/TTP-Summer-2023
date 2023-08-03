const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../db");

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    //we need to compare the plain version to an encrypted version of the password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new Error("Incorrect username/password");
      error.status = 401;
      throw error;
    }

    res.send({ token: await user.generateToken() });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    next(err);
  }
});

router.get("/me", async (req, res, next) => {
  try {
    const { id } = await jwt.verify(req.headers.authorization, process.env.JWT);
    const user = await User.findByPk(id);

    if (!user) {
      throw `User with id of ${id} was not found`;
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
