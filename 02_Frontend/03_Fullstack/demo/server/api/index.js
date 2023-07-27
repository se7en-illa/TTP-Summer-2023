const router = require("express").Router();
const { Student, Course } = require("../db");

router.get("/students", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (err) {
    next(err);
  }
});

router.get("/students/:id", async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.id },
      include: Course,
    });

    console.log(student);

    res.send(student);
  } catch (err) {
    next(err);
  }
});

router.get("/courses", async (req, res, next) => {
  try {
    const students = await Course.findAll();
    res.send(students);
  } catch (err) {
    next(err);
  }
});

router.get("/courses/:id", async (req, res, next) => {
  try {
    const students = await Course.findByPk(req.params.id);
    res.send(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
