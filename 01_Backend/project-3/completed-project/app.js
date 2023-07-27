const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});