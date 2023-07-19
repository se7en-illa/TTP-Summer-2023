const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/animals");

const Dog = db.define("Dog", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
    },
  },
});

const Owner = db.define("Owner", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

Dog.hasOne(Owner);
Owner.belongsTo(Dog);
// async function connectToDb() {
//   await Dog.sync({ force: true });
// }

// connectToDb();

(async () => {
  // await Dog.sync({ force: true });
  // await Owner.sync({ force: true });
  await db.sync({ force: true });

  const pickles = await Dog.create({
    name: "pickles",
    age: 456,
  });

  const panchito = await Dog.create({
    name: "panchito",
    age: 49,
  });

  const tiffany = await Owner.create({
    name: "Tiffany",
    // DogId: pickles.id,
  });

  await tiffany.setDog(pickles);

  // console.log("Id: ", panchito.id);
  // console.log("Name: ", panchito.name);
  // console.log("Age: ", panchito.age);
})();
