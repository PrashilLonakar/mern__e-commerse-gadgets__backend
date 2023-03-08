const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGODB_URL, () => {
      console.log("Database Connected Succesfully1");
    });
    // console.log("Database Connected Succesfully2");
  } catch (error) {
    // throw new Error(error);
    console.log("Database Error");
    process.exit(1);
  }
};

module.exports = dbConnect;
