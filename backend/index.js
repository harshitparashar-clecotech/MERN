const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

mongoDB()
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type,Accept"
  );
  next()
});
app.get("/", (req, res) => {
  res.send("hello from backend");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Backend listern on port ${port}`);
});
