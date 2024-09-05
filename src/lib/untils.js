import mongoose from "mongoose";

const connection = {}; // Store the connection state

export const connectToDb = async () => {
  try {
    // Check if already connected
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // Connect to the database
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;

  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error("Failed to connect to the database");
  }
};
