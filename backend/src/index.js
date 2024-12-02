//import packages
import express from "express";
import dotenv from "dotenv";

//Import local files
import { connectDB } from "./lib/db.js";

//Register packages
const app = express();
dotenv.config();
const PORT = process.env.PORT;

//import routes
import authRoutes from "./routes/auth.route.js";

//Register routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
  connectDB();
});
