const { Tenant, Unit, Lease, Pet, User, db } = require("./db");

(async () => {
  await db.sync({ force: true });

  await Tenant.create({
    name: "Orlando",
    phone: "1234567890",
    ssn: "2098319208",
  });

  await Tenant.create({
    name: "Rando",
    phone: "1111111111",
    ssn: "98912389",
  });
})();
