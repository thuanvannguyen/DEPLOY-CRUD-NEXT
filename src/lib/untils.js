import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      //must add in order to not get any error masseges:
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(`mongo database is connected!!! ${conn.connection.host} `)
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};