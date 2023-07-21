const express = require("express");
const app = express();
const PORT = 3000;
const { Tenant, Lease } = require("./db");

// we need this receive data from the client
app.use(express.urlencoded({ extended: false }));

// an example of RESTful routing
//  for more information please read here: https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb
app.get("/tenants", async (req, res, next) => {
  // if you wanted to catch errors, you would pull in next and send it to
  //  the error handler like so (this needs to occur on every route that you would
  //  like to catch errors for)
  try {
    const allTenants = await Tenant.findAll();
    res.send(allTenants);
  } catch (err) {
    next(err);
  }
});

app.get("/tenants/:id", async (req, res, next) => {
  try {
    const aTenant = await Tenant.findByPk(req.params.id);
    res.send(aTenant);
  } catch (err) {
    next(err);
  }
});

app.get("/leases", async (req, res, next) => {
  // if you wanted to catch errors, you would pull in next and send it to
  //  the error handler like so (this needs to occur on every route that you would
  //  like to catch errors for)
  try {
    const allLeases = await Lease.findAll();
    res.send(allLeases);
  } catch (err) {
    next(err);
  }
});

app.post("/leases", async (req, res, next) => {
  try {
    const newLease = await Lease.create(req.body);
    res.send(newLease);
  } catch (err) {
    next(err);
  }
});

app.delete("/leases/:id", async (req, res, next) => {
  try {
    const aLease = await Lease.findByPk(req.params.id);
    aLease.destroy();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// extra crud operations now mentioned in the prompt
// app.post("/tenants", async (req, res, next) => {
//   try {
//     // create a new tenant
//     const newTenant = await Tenant.create(req.body);
//     res.send(newTenant);
//   } catch (err) {
//     next(err);
//   }
// });

// app.put("/tenants/:id", async (req, res, next) => {
//   try {
//     // update a tenant
//     const aTenant = await Tenant.findByPk(req.params.id);
//     aTenant.update(req.body);

//     res.send(aTenant);
//   } catch (err) {
//     next(err);
//   }
// });

// app.delete("/tenants/:id", async (req, res) => {
//   try {
//     // delete a tenant
//     const aTenant = await Tenant.findByPk(req.params.id);
//     aTenant.destroy();

//     res.sendStatus(200);
//   } catch (err) {
//     next(err);
//   }
// });

// error handler
app.use((err, req, rest, next) => {
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
