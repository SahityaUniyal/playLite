import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connectionInstace);
    console.log(
      `\n MongoDD connected ! DB HOST: ${connectionInstace.connection.host}`
    );
    // app.on('error', (error) => {
    //     console.log(error);
    //     throw error;
    // })
  } catch (error) {
    console.error("MONGODB connection error : " + error);
    process.exit(1);
  }
};

export default connectDB;
