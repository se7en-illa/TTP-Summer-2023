const express = require("express");
const app = express();
const PORT = 3000;
const { Tenant } = require("./db");

// we need this receive data from the client
app.use(express.urlencoded({ extended: false }));

// an example of RESTful routing
app.get("/tenants", async (req, res, next) => {
  // if you wanted to catch errors, you would pull in next and send it to
  //  the error handler like so
  try {
    const allTenants = await Tenant.findAll();
    res.send(allTenants);
  } catch (err) {
    next(err);
  }
});

app.get("/tenants/:id", async (req, res, next) => {
  const aTenant = await Tenant.findByPk(req.params.id);

  if (!aTenant) {
    next(new Error("An error has occurred"));
  } else {
    res.send(aTenant);
  }
});

app.post("/tenants", async (req, res) => {
  // create a new tenant
  const newTenant = await Tenant.create(req.body);
  res.send(newTenant);
});

app.put("/tenants/:id", async (req, res) => {
  // update a tenant
  const aTenant = await Tenant.findByPk(req.params.id);
  aTenant.update(req.body);

  res.send(aTenant);
});

app.delete("/tenants/:id", async (req, res) => {
  // delete a tenant
  const aTenant = await Tenant.findByPk(req.params.id);
  aTenant.destroy();

  res.sendStatus(201);
});

// TODO: add error handler
app.use((err, req, rest, next) => {
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
