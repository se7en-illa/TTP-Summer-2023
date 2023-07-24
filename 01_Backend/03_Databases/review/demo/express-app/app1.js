const express = require("express");
const app = express();
const PORT = 3000;
const { Tenant } = require("./db");

app.get("/", (req, res) => {
    res.send("Send msg!");
});

app.get("/tenants", async (req, res) => {
    const allTenants = await Tenant.findAll();
    res.send(allTenants);
    // res.send("Get all tenants")
});

app.get("/tenants/:id", async (req, res) => {
    const aTenant = await Tenant.findByPk(req.params.id);
    res.send(aTenant);
    // res.send("Get a single tenant")
});

app.post("/tenants", (req, res) => {
    res.send("Creates a tenant")
});


app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})