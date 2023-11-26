const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const DB = process.env.DATABASE;
    await mongoose.connect(
      "mongodb+srv://k88817029:AzeY1mYpYlX0apAA@cluster1.m5xynev.mongodb.net/?retryWrites=true&w=majori",
      { autoIndex: false }
    );
    console.log("Connected to the Database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectToDatabase;
