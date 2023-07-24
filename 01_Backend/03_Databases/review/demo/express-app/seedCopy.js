const { Tenant, Unit, Lease, Pet, User, db } = require("./db");

(async() => {
    await db.sync({ force: true });
    
    await Tenant.create({
        name: "Alex",
        phone: "347-469-8736",
        ssn: "###-##-####",
    });

    await Tenant.create({
        name: "John",
        phone: "347",
        ssn: "###-##-####",
    });
});