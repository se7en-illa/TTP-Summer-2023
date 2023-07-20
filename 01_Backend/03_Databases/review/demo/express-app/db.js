const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/monopoly");

const Tenant = db.define("tenant", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: Sequelize.STRING,
  ssn: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Pet = db.define("pet", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Unit = db.define("unit", {
  floor: Sequelize.INTEGER,
  aptNumber: Sequelize.STRING,
  bedrooms: Sequelize.INTEGER,
  area: Sequelize.INTEGER,
});

const Lease = db.define("lease", {
  beginDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  rent: Sequelize.INTEGER,
});

// one to one
Tenant.hasOne(User);
User.belongsTo(Tenant);

// one to many
Tenant.hasMany(Pet);
Pet.belongsTo(Tenant); // this was incorrect beforehand

// many to many
Tenant.belongsToMany(Unit, { through: Lease });
Unit.belongsToMany(Tenant, { through: Lease });

module.exports = {
  Tenant, // Tenant: Tenant
  User, // User: User
  Pet, // Pet: Pet
  Unit, // Unit: Unit
  Lease, // Lease: Lease
  db, // db: db
};
