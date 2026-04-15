const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB - Taffy");
  } catch (err) {
    console.error("Connection failed: ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
