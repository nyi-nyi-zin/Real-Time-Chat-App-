//import packages
import express from "express";

const app = express();

//import routes
import authRoutes from "./routes/auth.route.js";

//Register routes
app.use("/api/auth", authRoutes);

app.listen(5001, console.log("server is running on port 5001"));
