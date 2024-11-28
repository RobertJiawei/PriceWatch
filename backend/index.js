import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import productRoutes from "./routes/product.route.js";
import { checkPriceChange } from "./utility/priceCheck.js";

dotenv.config({ path: "../.env" });
const app = express();

app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

app.use("/product", productRoutes);

mongoose
  .connect(process.env.databaseURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
      checkPriceChange();
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"));
});
