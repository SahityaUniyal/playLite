import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected ! DB HOST: ${connectionInstace.connection.host}`
    );
    // app.on("error", (error) => {
    //   console.log("something something");
    //   throw error;
    // });
  } catch (error) {
    console.error("MONGODB connection error : " + error);
    process.exit(1);
  }
};

export default connectDB;
