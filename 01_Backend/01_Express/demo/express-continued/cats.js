const { application } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the cats GET response");
});

router.post("/", (req, res) => {
  res.send("This is the cats POST response");
});

router.put("/", (req, res) => {
  res.send("This is the cats PUT response");
});

router.delete("/", (req, res) => {
  res.send("This is the cats DELETE response");
});

module.exports = router;
