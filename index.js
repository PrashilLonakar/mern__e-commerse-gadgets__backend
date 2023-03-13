const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./configs/dbConnect");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorhandler");

const PORT = process.env.PORT || 4000;
const app = express();
dbConnect();
app.use(cookieParser());
// app.use("/", (req, res) => {
//   res.send("Hello from server side");
// });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
