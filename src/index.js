import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on : http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB conection failed: " + err);
  });
