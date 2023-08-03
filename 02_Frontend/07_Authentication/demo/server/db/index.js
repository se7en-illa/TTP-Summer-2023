const db = require("./db");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

// instance method
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

// sequelize hook
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
});

module.exports = {
  db,
  User,
};
