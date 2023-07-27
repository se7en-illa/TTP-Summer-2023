#!/usr/bin/env node

const fs = require("fs");
const { db, Student, Course } = require("../server/db");

const seed = async () => {
  await db.sync({ force: true });

  const barry = await Student.create({
    name: "Barry Allen",
    registrationId: "9j8j998j",
  });
  const johnWick = await Student.create({
    name: "John Wick",
    registrationId: "8hj89hh7",
  });
  const erron = await Student.create({
    name: "Erron Black",
    registrationId: "8721g3781g2",
  });
  const mariana = await Student.create({
    name: "Mariana Avila",
    registrationId: "kjghu123h8",
  });

  // create some courses
  const introToProgramming = await Course.create({
    name: "Intro to Programming",
    preReq: null,
  });
  const webDev101 = await Course.create({
    name: "Web Development 101",
    preReq: introToProgramming.id,
  });
  const introToC = await Course.create({
    name: "Intro to C",
    preReq: introToProgramming.id,
  });
  const calc1 = await Course.create({ name: "Calculus I", preReq: null });
  const ethics210 = await Course.create({ name: "Ethics 210", preReq: null });

  // magics methods to assign
  await calc1.setStudents([johnWick, mariana]);
  await ethics210.setStudents([barry, erron]);
  await introToProgramming.addStudent(mariana);

  db.close();
  console.log(`

    Seeding successful!
    Juke is now ready to rock!

  `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
