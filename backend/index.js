const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();
app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen(port, () => {
  console.log(`Backend listern on port ${port}`);
});
