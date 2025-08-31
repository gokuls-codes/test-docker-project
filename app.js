const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello, World!! Updated nowat 6:47 pm");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
