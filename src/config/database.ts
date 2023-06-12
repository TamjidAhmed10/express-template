import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI as string;
    // console.log(dbURI)// Retrieve the MongoDB URI from the environment variable
    // Connect to MongoDB
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Terminate the application if the connection fails
  }
};

export default connectDB;
