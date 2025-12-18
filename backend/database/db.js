import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongodburl, {
      dbName: "socialmedia",
    });
    console.log("✅ MongoDB Connected");
  } catch (e) {
    console.log("❌ MongoDB connection error:", e);
  }
};

export default connectdb;
