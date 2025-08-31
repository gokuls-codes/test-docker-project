const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello, World!! Updated now at 8:09 pm");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
