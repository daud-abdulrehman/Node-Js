const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/E-Com";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log("Connected to DataBase");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;