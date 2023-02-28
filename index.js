const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./configs/dbConnect");

dbConnect();
app.use("/", (req, res) => {
  res.send("Hello from server side");
});
app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
