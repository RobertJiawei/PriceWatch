import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config({ path: "../.env" });
const app = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRoutes);

mongoose
  .connect(process.env.databaseURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
