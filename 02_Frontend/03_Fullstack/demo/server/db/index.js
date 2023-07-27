const { db, Sequelize } = require("./db");
// require each of your models here...
const Student = db.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  registrationId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const Course = db.define("course", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  preReq: {
    type: Sequelize.INTEGER,
  },
});

// ...and give them some nice associations here!

// many to many relationship
Student.belongsToMany(Course, { through: "enrollments" });
Course.belongsToMany(Student, { through: "enrollments" });

module.exports = {
  db,
  Student,
  Course,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
