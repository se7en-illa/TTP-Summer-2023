const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Books");
});

router.get("/:id", (req, res) => {
  res.send(`GET Book with id ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.json(req.body); // Echoes back the sent JSON
});

router.put("/:id", (req, res) => {
  res.send(`PUT Book with id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`DELETE Book with id ${req.params.id}`);
});

module.exports = router;
